import React, {
  useState,
  useReducer,
  useEffect,
  useCallback,
  memo,
} from 'react';

// Components
import FilterDialog from '../common/filter-dialog';
import SearchBar from '../common/search-bar';
import SiteListItems from './site-list-items';
import SiteListHeader from './site-list-header';
import LoadingIndicator from '../common/loading-indicator';

// MUI
import { Typography, SelectChangeEvent, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Reducer
import {
  SiteListReducer,
  siteListInitialState,
  initializeState,
} from './reducer/site-list-reducer';

// Hooks
import useFetchSites from './queries/useFetchSites';

// enums
import {
  SiteListSearchByOptions,
  SiteListSortByOptions,
  SiteListActionType,
} from './types/types';

// Types
import type { BrowseSitesOptions } from './types/types';

const SiteList = () => {
  const [page, setPage] = useState<number>(1);
  const [state, dispatch] = useReducer(
    SiteListReducer,
    siteListInitialState,
    initializeState
  );
  const [debouncedSearch, setDebouncedSearch] = useState<string>(state.search);
  const [filterDialogOpen, setFilterDialogOpen] = useState<boolean>(false); // State to manage filter dialog

  const { search, searchBy, sortBy, filter } = state;

  const params: BrowseSitesOptions = {
    _page: page,
    ...(state.searchBy === SiteListSearchByOptions.all &&
      debouncedSearch !== '' && { q: debouncedSearch }),
    ...(state.searchBy === SiteListSearchByOptions.title &&
      debouncedSearch !== '' && { title_like: debouncedSearch }),
    ...(state.searchBy === SiteListSearchByOptions.contactFirstName &&
      debouncedSearch !== '' && {
        'contacts.main.firstName_like': debouncedSearch,
      }),
    ...(state.searchBy === SiteListSearchByOptions.contactLastName &&
      debouncedSearch !== '' && {
        'contacts.main.lastName_like': debouncedSearch,
      }),
    ...(state.searchBy === SiteListSearchByOptions.state &&
      debouncedSearch !== '' && {
        'address.state_like': debouncedSearch,
      }),
    ...(state.searchBy === SiteListSearchByOptions.country &&
      debouncedSearch !== '' && {
        'address.country_like': debouncedSearch,
      }),
    ...(state.sortBy === SiteListSortByOptions.createdAt && {
      _sort: SiteListSortByOptions.createdAt,
    }),
    ...(state.sortBy === SiteListSortByOptions.updatedAt && {
      _sort: SiteListSortByOptions.updatedAt,
    }),
    ...(state.filter.fromDate && {
      createdAt_gte: state.filter.fromDate,
    }),
    ...(state.filter.toDate && {
      createdAt_lte: state.filter.toDate,
    }),
  };

  const {
    data: sites,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    isPreviousData,
  } = useFetchSites(params);

  const handleFilterDialogOpen = useCallback(() => {
    setFilterDialogOpen(true);
  }, []);

  const handleFilterDialogClose = useCallback(() => {
    setFilterDialogOpen(false);
  }, []);

  const handleSaveFilters = useCallback(() => {
    // We can dispatch an action here to update the state.filter and update the query params
    setFilterDialogOpen(false);
  }, []);

  const handleSetToDate = useCallback(() => {}, []);

  const handleSetFromDate = useCallback(() => {}, []);

  const handleSearchByDropdown = useCallback((e: SelectChangeEvent<string>) => {
    dispatch({ type: SiteListActionType.setSearchBy, payload: e.target.value });
    setPage(1);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: SiteListActionType.setSearch, payload: e.target.value });
      setPage(1);
    },
    []
  );

  const handleSortByChange = useCallback((e: SelectChangeEvent<string>) => {
    dispatch({ type: SiteListActionType.setSortBy, payload: e.target.value });
    setPage(1);
  }, []);

  const setPageState = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  // Debounce effect for search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler); // Clear the timeout on unmount or when search value changes
    };
  }, [search]);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('siteListState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      dispatch({
        type: SiteListActionType.setSearch,
        payload: parsedState.search,
      });
      dispatch({
        type: SiteListActionType.setSearchBy,
        payload: parsedState.searchBy,
      });
      dispatch({
        type: SiteListActionType.setSortBy,
        payload: parsedState.sortBy,
      });
      dispatch({
        type: SiteListActionType.setFilter,
        payload: parsedState.filter,
      });
    }
  }, []);

  // Save state to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('siteListState', JSON.stringify(state));
  }, [state]);

  if (isLoading) return <LoadingIndicator />;
  if (isError) return <Typography>Error: {error.message}</Typography>;

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid
        container
        sx={{
          backgroundColor: '#6495ED',
          padding: 2,
          mb: 2,
          borderRadius: '8px',
        }}
        size={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={12}>
          <SiteListHeader />
        </Grid>

        {/* Search bar and Filter icon */}
        <Grid container size={12} alignItems="center" justifyContent="center">
          <SearchBar
            searchBy={searchBy}
            onSearchByChange={handleSearchByDropdown}
            sortBy={sortBy}
            onSortByChange={handleSortByChange}
            search={search}
            onSearchChange={handleSearchChange}
            handleFilterDialogOpen={handleFilterDialogOpen}
          />
        </Grid>
      </Grid>

      {isSuccess ? (
        <Grid container size={12} justifyContent="center" alignItems="center">
          {isFetching ? (
            <Grid
              container
              size={12}
              justifyContent="center"
              alignItems="center"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '200px',
              }}
            >
              <CircularProgress sx={{ color: '#6495ED' }} size={100} />
              <Typography sx={{ mt: 2, color: '#6495ED' }} fontSize={20}>
                Loading...
              </Typography>
            </Grid>
          ) : (
            <SiteListItems
              sites={sites}
              page={page}
              setPage={setPageState}
              isPreviousData={isPreviousData}
            />
          )}
        </Grid>
      ) : null}

      {/* Filter Dialog */}
      <FilterDialog
        open={filterDialogOpen}
        onClose={handleFilterDialogClose}
        fromDate={filter.fromDate}
        toDate={filter.toDate}
        setFromDate={handleSetFromDate}
        setToDate={handleSetToDate}
        onSave={handleSaveFilters}
      />
    </Grid>
  );
};

export default memo(SiteList);

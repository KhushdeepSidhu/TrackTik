// Types
import type { SiteListState, SiteListActions } from '../types/types';

// enums
import {
  SiteListSearchByOptions,
  SiteListSortByOptions,
  SiteListActionType,
} from '../types/types';

export const initializeState = () => {
  const savedState = localStorage.getItem('siteListState');
  if (savedState) {
    return { ...siteListInitialState, ...JSON.parse(savedState) };
  }
  return siteListInitialState;
};

export const siteListInitialState: SiteListState = {
  page: 1,
  search: '',
  searchBy: SiteListSearchByOptions.all,
  sortBy: SiteListSortByOptions.createdAt,
  filter: {
    fromDate: '',
    toDate: '',
  },
};

// Reducer function for search and filter state management
export const SiteListReducer = (
  state: SiteListState,
  action: SiteListActions
): SiteListState => {
  switch (action.type) {
    case SiteListActionType.setPage:
      return { ...state, page: action.payload };
    case SiteListActionType.setSearch:
      return { ...state, search: action.payload, page: 1 };
    case SiteListActionType.setSearchBy:
      return { ...state, searchBy: action.payload, page: 1 };
    case SiteListActionType.setSortBy:
      return { ...state, sortBy: action.payload, page: 1 };
    case SiteListActionType.setFilter:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
        page: 1,
      };
    default:
      return state;
  }
};

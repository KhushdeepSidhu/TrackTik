// Types
import type { SiteListState, SiteListActions } from '../types/types';

// enums
import {
  SiteListSearchByOptions,
  SiteListSortByOptions,
  SiteListActionType,
} from '../types/types';

export const siteListInitialState: SiteListState = {
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
    case SiteListActionType.setSearch:
      return { ...state, search: action.payload };
    case SiteListActionType.setSearchBy:
      return { ...state, searchBy: action.payload };
    case SiteListActionType.setSortBy:
      return { ...state, sortBy: action.payload };
    case SiteListActionType.setFilter:
      return { ...state, filter: { ...state.filter, ...action.payload } };
    default:
      return state;
  }
};

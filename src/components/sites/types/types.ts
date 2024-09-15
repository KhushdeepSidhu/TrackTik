export type FilterOptions = {
  fromDate: string;
  toDate: string;
};

export type SiteListState = {
  search: string;
  searchBy: string;
  sortBy: string;
  filter: FilterOptions;
};

export enum SiteListActionType {
  setSearch = 'SET_SEARCH',
  setSearchBy = 'SET_SEARCH_BY',
  setSortBy = 'SET_SORT_BY',
  setFilter = 'SET_FILTER',
}

type SiteListPayload = {
  [SiteListActionType.setSearch]: string;
  [SiteListActionType.setSearchBy]: string;
  [SiteListActionType.setSortBy]: string;
  [SiteListActionType.setFilter]: FilterOptions;
};

export enum SiteListSearchByOptions {
  all = 'all',
  title = 'title',
  contactFirstName = 'contactFirstName',
  contactLastName = 'contactLastName',
  state = 'state',
  country = 'country',
}

export enum SiteListSortByOptions {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

// type use for reducer Actions
export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type SiteListActions =
  ActionMap<SiteListPayload>[keyof ActionMap<SiteListPayload>];

export type BrowseSitesOptions = {
  _page?: number;
  title_like?: string;
  'contacts.main.firstName_like'?: string;
  'contacts.main.lastName_like'?: string;
  'address.state_like'?: string;
  'address.country_like'?: string;
  createdAt_gte?: string;
  createdAt_lte?: string;
  _sort?: string;
};

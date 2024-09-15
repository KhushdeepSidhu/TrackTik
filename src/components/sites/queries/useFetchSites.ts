import { useQuery } from 'react-query';

// API
import { fetchSitesByPage } from '../../../api/sitesApi/sites-api';

// Types
import type { Site } from '../../../libs/types/resources/Site';
import type { BrowseSitesOptions } from '../types/types';

// Custom hook for fetching sites
const useFetchSites = (params: BrowseSitesOptions) => {
  return useQuery<Site[], Error>(
    ['sites', params],
    () => fetchSitesByPage(params),
    {
      keepPreviousData: true,
    }
  );
};

export default useFetchSites;

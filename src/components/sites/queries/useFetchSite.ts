import { useQuery } from 'react-query';

// API
import { fetchSiteById } from '../../../api/sitesApi/sites-api';

// Types
import type { Site } from '../../../libs/types/resources/Site';

// Custom hook for fetching a site by ID
const useFetchSite = (id: string) => {
  return useQuery<Site, Error>(['site', id], () => fetchSiteById(id), {
    enabled: !!id, // Only run the query if id exists
  });
};

export default useFetchSite;

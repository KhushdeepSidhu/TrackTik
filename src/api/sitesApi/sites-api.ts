import api from '../api';

// Types
import type { BrowseSitesOptions } from '../../components/sites/types/types';
import type { Site } from '../../libs/types/resources/Site';

export const fetchSites = () =>
  api.get('sites').then((res) => {
    return res.data;
  });

export const fetchSitesByPage = async (
  params: BrowseSitesOptions
): Promise<Site[]> => {
  const res = await api.get<Site[]>('sites', { params });
  return res.data;
};

export const fetchSiteById = async (id: string): Promise<Site> => {
  const res = await api.get<Site>(`sites/${id}`);
  return res.data;
};

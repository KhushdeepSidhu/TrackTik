import api from '../api';

// Types
import type { Client } from '../../libs/types/resources/Client';

export const fetchClients = (): Promise<Client[]> =>
  api.get<Client[]>('clients').then((res) => res.data);

export const fetchStatus = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const IDLE = 'IDLE';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export const defaultApiStatuses = ['IDLE', 'PENDING', 'SUCCESS', 'ERROR'];

export const apiStatus = {
  IDLE: IDLE as ApiStatus,
  PENDING: PENDING as ApiStatus,
  SUCCESS: SUCCESS as ApiStatus,
  ERROR: ERROR as ApiStatus,
};

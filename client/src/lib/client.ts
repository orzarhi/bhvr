import { hcWithType } from '../../vendor/server/client';

export const client = hcWithType(getServerUrl());

function getServerUrl() {
  if (import.meta.env.NODE_ENV === 'production') {
    return import.meta.env.VITE_SERVER_URL_PROD;
  }
  return import.meta.env.VITE_SERVER_URL_DEV || 'http://localhost:3000/api';
}

import { AxiosRequestHeaders } from 'axios';
export interface ChatAuthHeaders extends AxiosRequestHeaders {
  'Public-Key': string;
  'Chat-ID': string;
  'Access-Key': string;
}

export interface UserAuthHeaders extends AxiosRequestHeaders {
  'Public-Key': string;
  'User-Name': string;
  'User-Secret': string;
}

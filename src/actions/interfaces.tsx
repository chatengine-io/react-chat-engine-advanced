import { AxiosRequestHeaders } from 'axios';

type Conn = {
  development?: boolean;
};

interface ChatAuth extends Conn {
  projectID: string;
  chatID: string;
  chatAccessKey: string;
}

interface UserAuth extends Conn {
  projectID: string;
  userName: string;
  userSecret: string;
}

export type Auth = ChatAuth | UserAuth;

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

let isDevelopment = (p: any): p is Auth => !!p.chatID;

export const getApiUrl = (props: Auth): string => {
  if (isDevelopment(props)) {
    return 'http://127.0.0.1:8000';
  } else {
    return 'https://api.chatengine.io';
  }
};

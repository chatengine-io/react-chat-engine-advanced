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

interface ChatHeaders extends AxiosRequestHeaders {
  'Public-Key': string;
  'Chat-ID': string;
  'Access-Key': string;
}

interface UserHeaders extends AxiosRequestHeaders {
  'Public-Key': string;
  'User-Name': string;
  'User-Secret': string;
}

type Headers = UserHeaders | ChatHeaders;

let isChatAuth = (p: any): p is ChatAuth => !!p.chatID;

let isDevelopment = (p: any): p is Auth => !!p.chatID;

export const getApiUrl = (props: Auth): string => {
  if (isDevelopment(props)) {
    return 'http://127.0.0.1:8000';
  } else {
    return 'https://api.chatengine.io';
  }
};

export const getHeaders = (props: Auth): Headers => {
  if (isChatAuth(props)) {
    return {
      'Public-Key': props.projectID,
      'Chat-ID': props.chatID,
      'Access-Key': props.chatAccessKey,
    };
  } else {
    return {
      'Public-Key': props.projectID,
      'User-Name': props.userName,
      'User-Secret': props.userSecret,
    };
  }
};

import { HTMLAttributes } from 'react';

import { Properties } from 'csstype';

export interface MessageProps {
  id?: number;
  text: string;
  sender_username: string;
  created: string;
  attachments: Array<object>;
  custom_json: object | string;
}

export interface PersonProps {
  username: string;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
  custom_json: string | object | null;
  is_online: boolean;
}

export interface ChatPersonProps {
  person: PersonProps;
  chat_updated: string | null;
  last_read: number | null;
}
export interface ChatProps {
  id: number;
  title: string;
  created: string;
  is_direct_chat: boolean;
  custom_json: object | string;
  last_message: MessageProps;
  attachments: Array<object>;
  people: Array<ChatPersonProps>;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: Properties;
  chats: Array<ChatProps>;
  activeChatID?: number;
  onChatClick?: (chatID: number) => void;
  onChatFormSubmit?: (title: string) => void;
  isLoading?: boolean;
  userName?: string;
}

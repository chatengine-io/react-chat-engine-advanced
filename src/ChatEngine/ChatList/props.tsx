import { HTMLAttributes } from 'react';

import { ChatListStyles } from './styles';

import { ChatProps } from '../../util/interfaces';

export interface Props extends HTMLAttributes<HTMLDivElement>, ChatListStyles {
  chats: Array<ChatProps>;
  activeChatKey?: number;
  myUsername?: string;
  isLoading?: boolean;
  hasMoreChats?: boolean;
  onChatClick?: (chatID: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
}

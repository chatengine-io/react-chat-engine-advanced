import { HTMLAttributes } from 'react';

import { ChatListStyles } from './styles';

import { ChatsProps } from '../../util/interfaces';

export interface Props extends HTMLAttributes<HTMLDivElement>, ChatListStyles {
  chats: ChatsProps;
  activeChatKey?: number;
  myUsername?: string;
  isLoading?: boolean;
  hasMoreChats?: boolean;
  onChatClick?: (chatID: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
}

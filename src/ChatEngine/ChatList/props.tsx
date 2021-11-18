import { HTMLAttributes } from 'react';

import { ChatListStyles } from './styles';

import { ChatProps } from '../../util/interfaces';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  chats: Array<ChatProps>;
  activeChatID?: number;
  onChatClick?: (chatID: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
  isLoading?: boolean;
  hasMoreChats?: boolean;
  userName?: string;
  customStyle?: ChatListStyles;
}

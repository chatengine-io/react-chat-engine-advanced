import { HTMLAttributes } from 'react';

import { ChatListStyles } from './styles';

import { ChatObject } from '../../../interfaces';

import { ChatFormProps } from './ChatForm/props';
import { ChatCardProps } from './ChatCard/props';

export interface ChatListProps
  extends HTMLAttributes<HTMLDivElement>,
    ChatListStyles {
  // Data
  chats: ChatObject[];
  activeChatId?: number;
  username?: string;
  timezoneOffset?: number;
  // State
  isLoading?: boolean;
  hasMoreChats?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderShow?: () => void;
  // Render Functions
  renderChatList?: (
    props: ChatListProps
  ) => JSX.Element | Element | React.FC<ChatListProps>;
  renderChatForm?: (
    props: ChatFormProps
  ) => JSX.Element | Element | React.FC<ChatFormProps>;
  renderChatCard?: (
    props: ChatCardProps
  ) => JSX.Element | Element | React.FC<ChatCardProps>;
}

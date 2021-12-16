import { HTMLAttributes } from 'react';

import { ChatListStyles } from './styles';

import { ChatProps } from '../../../interfaces';

import { Props as ChatFormProps } from './ChatForm/props';
import { Props as ChatCardProps } from './ChatCard/props';

export interface Props extends HTMLAttributes<HTMLDivElement>, ChatListStyles {
  // Data
  chats: ChatProps[];
  activeChatId?: number;
  myUsername?: string;
  // State
  isLoading?: boolean;
  hasMoreChats?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderShow?: () => void;
  // Render Functions
  renderChatList?: (props: Props) => React.FC<Props>;
  renderChatForm?: (props: ChatFormProps) => React.FC<ChatFormProps>;
  renderChatCard?: (props: ChatCardProps) => React.FC<ChatCardProps>;
}

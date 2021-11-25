import { ChatsProps, MessagesProps } from '../util/interfaces';
import { ChatEngineStyles } from './styles';

export interface Props extends ChatEngineStyles {
  chats?: ChatsProps;
  activeChatKey?: number;
  messages?: MessagesProps;
  myUsername?: string;
  isChatListLoading?: boolean;
  isChatFeedLoading?: boolean;
  isChatSettingsLoading?: boolean;
  hasMoreChats?: boolean;
  hasMoreMessages?: boolean;
}

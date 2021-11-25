import { ChatProps, MessageProps } from '../util/interfaces';
import { ChatEngineStyles } from './styles';

export interface Props extends ChatEngineStyles {
  chats: Array<ChatProps>;
  activeChatKey?: number;
  messages: { [created: string]: MessageProps };
  myUsername: string;
  isChatListLoading?: boolean;
  isChatFeedLoading?: boolean;
  isChatSettingsLoading?: boolean;
  hasMoreChats?: boolean;
  hasMoreMessages?: boolean;
}

import { ChatsProps, MessagesProps } from '../util/interfaces';
import { ChatEngineStyles } from './styles';

export interface Props extends ChatEngineStyles {
  // Data
  chats?: ChatsProps;
  activeChatKey?: number;
  messages?: MessagesProps;
  myUsername?: string;
  // State
  isChatListLoading?: boolean;
  isChatFeedLoading?: boolean;
  isChatSettingsLoading?: boolean;
  hasMoreChats?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
  onMessageSend?: (value: string, attachments: Array<File>) => void;
}

import { ChatProps, MessagesProps } from '../../../interfaces';

import { ChatFeedStyles } from './styles';

import { Props as ChatHeaderProps } from './ChatHeader/props';
import { Props as MessageListProps } from './MessageList/props';
import { Props as MessageProps } from './MessageList/Message/props';
import { Props as MessageFormProps } from './MessageForm/props';

export interface Props extends ChatFeedStyles {
  // Data
  messages: MessagesProps;
  chat?: ChatProps;
  myUsername?: string;
  // State
  isLoading?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
  onMessageSend?: (value: string, attachments: Array<File>) => void;
  // Render Functions
  renderChatFeed?: (props: Props) => React.FC<Props>;
  renderChatHeader?: (props: ChatHeaderProps) => React.FC<ChatHeaderProps>;
  renderMessageList?: (props: MessageListProps) => React.FC<MessageListProps>;
  renderMessage?: (props: MessageProps) => React.FC<MessageProps>;
  renderMessageForm?: (props: MessageFormProps) => React.FC<MessageFormProps>;
}

import { ChatProps, MessageProps } from '../../../interfaces';

import { ChatFeedStyles } from './styles';

import { Props as ChatHeaderProps } from './ChatHeader/props';
import { Props as MessageListProps } from './MessageList/props';
import { Props as MessageBubbleProps } from './MessageList/Message/props';
import { Props as MessageFormProps } from './MessageForm/props';

export interface Props extends ChatFeedStyles {
  // Data
  messages: MessageProps[];
  myUsername: string;
  chat?: ChatProps;
  // State
  isLoading?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
  onMessageSend?: (message: MessageProps) => void;
  // Render Functions
  renderChatFeed?: (props: Props) => React.FC<Props>;
  renderChatHeader?: (props: ChatHeaderProps) => React.FC<ChatHeaderProps>;
  renderMessageList?: (props: MessageListProps) => React.FC<MessageListProps>;
  renderMessage?: (props: MessageBubbleProps) => React.FC<MessageBubbleProps>;
  renderMessageForm?: (props: MessageFormProps) => React.FC<MessageFormProps>;
}

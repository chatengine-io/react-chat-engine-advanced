import { ChatObject, MessageObject } from '../../../interfaces';

import { ChatFeedStyles } from './styles';

import { Props as ChatHeaderProps } from './ChatHeader/props';
import { Props as MessageListProps } from './MessageList/props';
import { Props as MessageBubbleProps } from './MessageList/Message/props';
import { Props as WelcomeGifProps } from './WelcomeGif/props';
import { Props as MessageFormProps } from './MessageForm/props';

export interface Props extends ChatFeedStyles {
  // Data
  messages: MessageObject[];
  username?: string;
  chat?: ChatObject;
  timezoneOffset?: number;
  // State
  isLoading?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onMessageLoaderShow?: () => void;
  onMessageLoaderHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  onMessageFormSubmit?: (message: MessageObject) => void;
  // Render Functions
  renderChatFeed?: (props: Props) => React.FC<Props>;
  renderChatHeader?: (props: ChatHeaderProps) => React.FC<ChatHeaderProps>;
  renderMessageList?: (props: MessageListProps) => React.FC<MessageListProps>;
  renderMessage?: (props: MessageBubbleProps) => React.FC<MessageBubbleProps>;
  renderWelcomeGif?: (props: WelcomeGifProps) => React.FC<WelcomeGifProps>;
  renderMessageForm?: (props: MessageFormProps) => React.FC<MessageFormProps>;
}

import { ChatObject, MessageObject } from '../../../interfaces';

import { ChatFeedStyles } from './styles';

import { ChatHeaderProps } from './ChatHeader/props';
import { MessageListProps } from './MessageList/props';
import { MessageProps } from './MessageList/Message/props';
import { WelcomeGifProps } from './WelcomeGif/props';
import { MessageFormProps } from './MessageForm/props';

export interface ChatFeedProps extends ChatFeedStyles {
  // Data
  messages: MessageObject[];
  username?: string;
  chat?: ChatObject;
  timezoneOffset?: number;
  // State
  isLoading?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onMessageLoaderShow?: () => Promise<void>;
  onMessageLoaderHide?: () => Promise<void>;
  onBottomMessageShow?: () => Promise<void>;
  onBottomMessageHide?: () => Promise<void>;
  onMessageFormSubmit?: (message: MessageObject) => Promise<void>;
  // Render Functions
  renderChatFeed?: (
    props: ChatFeedProps
  ) => JSX.Element | Element | React.FC<ChatFeedProps>;
  renderChatHeader?: (
    props: ChatHeaderProps
  ) => JSX.Element | Element | React.FC<ChatHeaderProps>;
  renderMessageList?: (
    props: MessageListProps
  ) => JSX.Element | Element | React.FC<MessageListProps>;
  renderMessage?: (
    props: MessageProps
  ) => JSX.Element | Element | React.FC<MessageProps>;
  renderWelcomeGif?: (
    props: WelcomeGifProps
  ) => JSX.Element | Element | React.FC<WelcomeGifProps>;
  renderMessageForm?: (
    props: MessageFormProps
  ) => JSX.Element | Element | React.FC<MessageFormProps>;
}

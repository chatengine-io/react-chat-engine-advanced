import { ChatObject, MessageObject } from '../../../../interfaces';

import { MessageListStyles } from './styles';

import { Props as MessageBubbleProps } from './Message/props';
export interface Props extends MessageListStyles {
  // Data
  messages: MessageObject[];
  chat?: ChatObject;
  username?: string;
  timezoneOffset?: number;
  // State
  hasMoreMessages?: boolean;
  // Hooks
  onMessageLoaderShow?: () => void;
  onMessageLoaderHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  // Render Functions
  renderMessageList?: (props: Props) => React.FC<Props>;
  renderMessage?: (props: MessageBubbleProps) => React.FC<MessageBubbleProps>;
}

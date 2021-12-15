import { ChatProps, MessageProps } from '../../../../interfaces';

import { MessageListStyles } from './styles';

import { Props as MessageBubbleProps } from './Message/props';
export interface Props extends MessageListStyles {
  // Data
  messages: MessageProps[];
  chat?: ChatProps;
  myUsername?: string;
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

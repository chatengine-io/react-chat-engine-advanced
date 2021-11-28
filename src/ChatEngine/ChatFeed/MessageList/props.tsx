import { ChatProps, MessagesProps } from '../../../util/interfaces';

import { MessageListStyles } from './styles';

import { Props as MessageProps } from './Message/props';
export interface Props extends MessageListStyles {
  // Data
  messages: MessagesProps;
  chat?: ChatProps;
  myUsername?: string;
  // State
  hasMoreMessages?: boolean;
  // Hooks
  onTopMessageShow?: () => void;
  onTopMessageHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  // Render Functions
  renderMessageList?: (props: Props) => React.FC<Props>;
  renderMessage?: (props: MessageProps) => React.FC<MessageProps>;
}

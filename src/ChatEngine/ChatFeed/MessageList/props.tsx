import { ChatProps, MessagesProps } from '../../../util/interfaces';

import { MessageListStyles } from './styles';
export interface Props extends MessageListStyles {
  messages: MessagesProps;
  chat?: ChatProps;
  myUsername?: string;
  onTopMessageShow?: () => void;
  onTopMessageHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
}

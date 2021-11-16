import { ChatProps, MessageProps } from '../../../util/interfaces';

import { MessageListStyles } from './styles';
export interface Props {
  messages: { [created: string]: MessageProps };
  chat?: ChatProps;
  myUsername?: string;
  onTopMessageShow?: () => void;
  onTopMessageHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  customStyle?: MessageListStyles;
}

import { MessageProps, ChatProps } from '../../../../util/interfaces';

import { MessageStyle } from './styles';

export interface Props {
  lastMessage?: MessageProps | null;
  message: MessageProps;
  nextMessage?: MessageProps | null;
  chat?: ChatProps | null;
  isSending?: boolean;
  isMyMessage?: boolean;
  showDateTime?: boolean;
  style?: MessageStyle;
}

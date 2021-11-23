import { MessageProps, ChatProps } from '../../../../util/interfaces';

import { MessageStyle } from './styles';

export interface Props extends MessageStyle {
  lastMessage?: MessageProps | null;
  message: MessageProps;
  nextMessage?: MessageProps | null;
  chat?: ChatProps | null;
  isSending?: boolean;
  isMyMessage?: boolean;
  showDateTime?: boolean;
}

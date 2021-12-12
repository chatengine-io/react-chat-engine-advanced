import { MessageProps, ChatProps } from '../../../../../interfaces';

import { MessageStyle } from './styles';

export interface Props extends MessageStyle {
  // Data
  lastMessage?: MessageProps | null;
  message: MessageProps;
  nextMessage?: MessageProps | null;
  chat?: ChatProps | null;
  // State
  isSending?: boolean;
  isMyMessage?: boolean;
  showDateTime?: boolean;
  // Render Functions
  renderMessage?: (props: Props) => React.FC<Props>;
}

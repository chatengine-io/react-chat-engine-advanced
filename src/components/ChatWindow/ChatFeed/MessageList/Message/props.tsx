import { MessageObject, ChatObject } from '../../../../../interfaces';

import { MessageStyle } from './styles';

export interface Props extends MessageStyle {
  // Data
  lastMessage?: MessageObject | null;
  message: MessageObject;
  nextMessage?: MessageObject | null;
  chat?: ChatObject | null;
  timezoneOffset?: number;
  // State
  isSending?: boolean;
  isMyMessage?: boolean;
  showDateTime?: boolean;
  // Render Functions
  renderMessage?: (props: Props) => React.FC<Props>;
}

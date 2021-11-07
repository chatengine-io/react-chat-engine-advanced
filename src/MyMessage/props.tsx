import { MessageProps } from '../util/interfaces';

export interface Props {
  lastMessage?: MessageProps | null;
  message: MessageProps;
  nextMessage?: MessageProps | null;
  isSending?: boolean;
}

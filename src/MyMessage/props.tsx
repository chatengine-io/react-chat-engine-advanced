import { MessageProps, ChatProps } from '../util/interfaces';

export interface Props {
  lastMessage?: MessageProps | null;
  message: MessageProps;
  nextMessage?: MessageProps | null;
  chat?: ChatProps | null;
  isSending?: boolean;
}

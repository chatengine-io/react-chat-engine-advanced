import { MessageProps } from '../util/interfaces';

export interface Props {
  lastMessage: MessageProps;
  message: MessageProps;
  nextMessage: MessageProps;
  isSending?: boolean;
}

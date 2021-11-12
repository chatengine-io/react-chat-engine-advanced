import { ChatProps, MessageProps } from '../../util/interfaces';

export interface Props {
  messages: { [created: string]: MessageProps };
  chat?: ChatProps;
  myUsername?: string;
}

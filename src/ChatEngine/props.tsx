import { ChatProps, MessageProps } from '../util/interfaces';
import { ChatEngineStyles } from './styles';

export interface Props extends ChatEngineStyles {
  chats: Array<ChatProps>;
  chat: ChatProps;
  messages: { [created: string]: MessageProps };
  myUsername: string;
}

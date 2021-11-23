import { Properties } from 'csstype';

import { MessageStyle } from './Message/styles';

export interface MessageListStyles extends MessageStyle {
  messageListStyle?: Properties;
}

export const styles: MessageListStyles = {
  messageListStyle: {} as Properties,
  messageStyle: {} as Properties,
};

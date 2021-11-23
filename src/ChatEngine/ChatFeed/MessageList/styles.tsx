import { Properties } from 'csstype';

import { MessageStyle } from './Message/styles';

export interface MessageListStyles extends MessageStyle {
  messageList?: Properties;
}

export const styles: MessageListStyles = {
  messageList: {} as Properties,
  messageStyle: {} as Properties,
};

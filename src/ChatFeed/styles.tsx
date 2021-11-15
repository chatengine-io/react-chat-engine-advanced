import { Properties } from 'csstype';

import { ChatHeaderStyles } from './ChatHeader/styles';
import { MessageFormStyles } from './MessageForm/styles';

export interface ChatFeedStyles extends ChatHeaderStyles, MessageFormStyles {
  chatFeed?: Properties;
}

export const styles: ChatFeedStyles = {
  chatFeed: {
    height: '800px',
    position: 'relative',
  } as Properties,
};

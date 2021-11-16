import { ChatProps, MessageProps } from '../util/interfaces';

import { ChatFeedStyles } from './styles';

export interface Props {
  chat: ChatProps;
  messages: { [created: string]: MessageProps };
  myUsername?: string;
  isLoading?: boolean;
  customStyle?: ChatFeedStyles;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
}

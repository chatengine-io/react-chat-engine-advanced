import { ChatProps, MessageProps } from '../../util/interfaces';

import { ChatFeedStyles } from './styles';

export interface Props extends ChatFeedStyles {
  chat: ChatProps;
  messages: { [created: string]: MessageProps };
  myUsername?: string;
  isLoading?: boolean;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
}

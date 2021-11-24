import { ChatProps, MessageProps } from '../../util/interfaces';

import { ChatFeedStyles } from './styles';

export interface Props extends ChatFeedStyles {
  messages: { [created: string]: MessageProps };
  chat?: ChatProps;
  myUsername?: string;
  isLoading?: boolean;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
}

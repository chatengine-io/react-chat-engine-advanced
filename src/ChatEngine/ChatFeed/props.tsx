import { ChatProps, MessagesProps } from '../../util/interfaces';

import { ChatFeedStyles } from './styles';

export interface Props extends ChatFeedStyles {
  messages: MessagesProps;
  chat?: ChatProps;
  myUsername?: string;
  isLoading?: boolean;
  hasMoreMessages?: boolean;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
}

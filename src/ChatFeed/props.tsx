import { ChatProps } from '../util/interfaces';

import { Props as ChatHeaderProps } from './ChatHeader/props';
import { Props as MessageListProps } from './MessageList/props';
import { Props as MessageFormProps } from './MessageForm/props';

import { ChatFeedStyles } from './styles';

export interface Props
  extends ChatHeaderProps,
    MessageListProps,
    MessageFormProps {
  chat: ChatProps;
  isLoading?: boolean;
  style?: ChatFeedStyles;
}

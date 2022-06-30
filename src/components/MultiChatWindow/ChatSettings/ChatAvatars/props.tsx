import { PersonObject } from '../../../../interfaces';

import { ChatAvatarsStyle } from './styles';

export interface ChatAvatarsProps extends ChatAvatarsStyle {
  users?: PersonObject[];
  username?: string;
  isDirectChat?: boolean;
  renderChatAvatars?: (
    props: ChatAvatarsProps
  ) => JSX.Element | Element | React.FC<ChatAvatarsProps>;
}

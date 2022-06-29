import { PersonObject } from '../../../../interfaces';

import { ChatAvatarsStyle } from './styles';

export interface Props extends ChatAvatarsStyle {
  users?: PersonObject[];
  username?: string;
  isDirectChat?: boolean;
  renderChatAvatars?: (props: Props) => JSX.Element | Element | React.FC<Props>;
}

import { PersonProps } from '../../../util/interfaces';

import { ChatAvatarsStyle } from './styles';

export interface Props extends ChatAvatarsStyle {
  users: PersonProps[];
  myUsername: string;
  isDirectChat?: boolean;
}

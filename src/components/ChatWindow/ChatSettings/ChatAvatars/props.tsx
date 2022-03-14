import { PersonObject } from '../../../../interfaces';

import { ChatAvatarsStyle } from './styles';

export interface Props extends ChatAvatarsStyle {
  users?: PersonObject[];
  username?: string;
  isDirectChat?: boolean;
}

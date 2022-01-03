import { PersonObject } from '../../../../interfaces';

import { ChatAvatarsStyle } from './styles';

export interface Props extends ChatAvatarsStyle {
  users?: PersonObject[];
  myUsername?: string;
  isDirectChat?: boolean;
}

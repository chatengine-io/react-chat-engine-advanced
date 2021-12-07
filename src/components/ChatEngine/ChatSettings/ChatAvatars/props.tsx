import { PersonProps } from '../../../../interfaces';

import { ChatAvatarsStyle } from './styles';

export interface Props extends ChatAvatarsStyle {
  users?: PersonProps[];
  myUsername?: string;
  isDirectChat?: boolean;
}

import { ChatHeaderStyles } from './styles';

export interface Props {
  id?: string | number;
  title?: string;
  description?: string;
  customStyle?: ChatHeaderStyles;
}

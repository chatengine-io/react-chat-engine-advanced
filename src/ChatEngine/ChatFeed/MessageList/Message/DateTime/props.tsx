import { DateTimeStyles } from './styles';

export interface Props {
  created: string;
  offset?: number;
  customStyle?: DateTimeStyles;
}

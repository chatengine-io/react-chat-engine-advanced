import { DateTimeStyles } from './styles';

export interface Props extends DateTimeStyles {
  created: string;
  offset?: number;
}

import { DateTimeStyles } from './styles';

export interface DateTimeProps extends DateTimeStyles {
  created: string;
  offset?: number;
}

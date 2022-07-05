import { FileStyles } from './styles';

export interface Props extends FileStyles {
  url?: string;
  fileName?: string;
  className?: string;
}

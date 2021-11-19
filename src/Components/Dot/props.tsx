import { DotStyles } from './styles';

export interface Props {
  avatarUrl?: string | null;
  username?: string;
  customStyle?: DotStyles;
  visible?: boolean;
}

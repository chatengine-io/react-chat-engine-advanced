import { DotStyles } from './styles';

export interface Props extends DotStyles {
  avatarUrl?: string | null;
  username?: string;
  isVisible?: boolean;
}

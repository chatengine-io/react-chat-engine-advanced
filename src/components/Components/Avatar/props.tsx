import { AvatarStyles } from './styles';

export interface Props extends AvatarStyles {
  avatarUrl?: string | null;
  username?: string;
  isOnline?: boolean | undefined;
  onClick?: () => void;
  className?: string;
}

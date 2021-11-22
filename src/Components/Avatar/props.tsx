import { AvatarStyles } from './styles';

export interface Props extends AvatarStyles {
  avatarUrl?: string;
  username?: string;
  isOnline?: boolean | undefined;
  onClick?: () => void;
}

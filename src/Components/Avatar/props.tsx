import { AvatarStyles } from './styles';

export interface Props {
  avatarUrl?: string;
  username?: string;
  isOnline?: boolean;
  showOnline?: boolean;
  customStyle?: AvatarStyles;
  onClick?: () => void;
}

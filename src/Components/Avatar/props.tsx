import CSS from 'csstype';

export interface Props {
  avatarUrl?: string;
  username?: string;
  isOnline?: boolean;
  showOnline?: boolean;
  style?: CSS.Properties;
  onClick?: () => void;
}
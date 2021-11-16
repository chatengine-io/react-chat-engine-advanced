import CSS from 'csstype';

export interface Props {
  avatarUrl?: string | null;
  username?: string;
  style?: CSS.Properties;
  visible?: boolean;
}

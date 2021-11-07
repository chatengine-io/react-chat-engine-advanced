import { HTMLAttributes } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  timeStamp?: string;
  isActive?: boolean;
  isLoading?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
  style?: CSS.Properties;
}

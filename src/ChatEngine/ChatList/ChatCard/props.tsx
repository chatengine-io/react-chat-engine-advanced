import { HTMLAttributes } from 'react';

import { ChatCardStyle } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  timeStamp?: string;
  isActive?: boolean;
  isLoading?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
  customStyle?: ChatCardStyle;
}

import { HTMLAttributes } from 'react';

import { ChatCardStyle } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement>, ChatCardStyle {
  title?: string;
  description?: string;
  timeStamp?: string;
  isActive?: boolean;
  isLoading?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
}

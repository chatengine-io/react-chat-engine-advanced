import { HTMLAttributes } from 'react';

import { ChatCardStyle } from './styles';

export interface Props extends HTMLAttributes<HTMLDivElement>, ChatCardStyle {
  // Data
  title?: string;
  description?: string;
  timeStamp?: string;
  // State
  hasNotification?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  // Hooks
  onClick?: () => void;
  // Render Functions
  renderChatCard?: (props: Props) => React.FC<Props>;
}

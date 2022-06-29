import { HTMLAttributes } from 'react';

import { ChatCardStyle } from './styles';
export interface Props extends HTMLAttributes<HTMLDivElement>, ChatCardStyle {
  // Data
  title?: string;
  description?: string;
  timeStamp?: string;
  avatarUsername?: string;
  avatarUrl?: string | null | undefined;
  // State
  hasNotification?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  // Hooks
  onClick?: () => void;
  // Render Functions
  renderChatCard?: (props: Props) => JSX.Element | Element | React.FC<Props>;
}

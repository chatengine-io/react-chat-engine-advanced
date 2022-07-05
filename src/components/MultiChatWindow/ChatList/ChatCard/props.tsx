import { HTMLAttributes } from 'react';

import { ChatCardStyle } from './styles';
export interface ChatCardProps
  extends HTMLAttributes<HTMLDivElement>,
    ChatCardStyle {
  // Data
  chatId?: number;
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
  renderChatCard?: (
    props: ChatCardProps
  ) => JSX.Element | Element | React.FC<ChatCardProps>;
}

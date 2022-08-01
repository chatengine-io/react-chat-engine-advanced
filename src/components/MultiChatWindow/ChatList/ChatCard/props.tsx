import { HTMLAttributes } from 'react';
import { ChatObject } from '../../../../interfaces';

import { ChatCardStyle } from './styles';
export interface ChatCardProps
  extends HTMLAttributes<HTMLDivElement>,
    ChatCardStyle {
  // Data
  title?: string;
  description?: string;
  timeStamp?: string;
  avatarUsername?: string;
  avatarUrl?: string | null | undefined;
  chat?: ChatObject;
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
  renderAvatar?: (
    props: ChatCardProps
  ) => JSX.Element | Element | React.FC<ChatCardProps>;
}

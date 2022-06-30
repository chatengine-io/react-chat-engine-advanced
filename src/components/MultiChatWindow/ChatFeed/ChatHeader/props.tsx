import { ReactNode } from 'react';
import { ChatHeaderStyles } from './styles';

export interface ChatHeaderProps extends ChatHeaderStyles {
  // Data
  id?: string | number;
  title?: string | ReactNode;
  description?: string;
  // Render Function
  renderChatHeader?: (
    props: ChatHeaderProps
  ) => JSX.Element | Element | React.FC<ChatHeaderProps>;
}

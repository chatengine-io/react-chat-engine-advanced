import { ReactNode } from 'react';
import { ChatHeaderStyles } from './styles';

export interface Props extends ChatHeaderStyles {
  // Data
  id?: string | number;
  title?: string | ReactNode;
  description?: string;
  // Render Function
  renderChatHeader?: (props: Props) => JSX.Element | Element | React.FC<Props>;
}

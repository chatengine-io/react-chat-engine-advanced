import { ChatHeaderStyles } from './styles';

export interface Props extends ChatHeaderStyles {
  // Data
  id?: string | number;
  title?: string;
  description?: string;
  // Render Function
  renderChatHeader?: (props: Props) => React.FC<Props>;
}

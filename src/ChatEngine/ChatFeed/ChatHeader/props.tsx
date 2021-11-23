import { ChatHeaderStyles } from './styles';

export interface Props extends ChatHeaderStyles {
  /** id of the chat */
  id?: string | number;

  /** title of the chat */
  title?: string;

  /** description to be displayed as a subtitle */
  description?: string;
}

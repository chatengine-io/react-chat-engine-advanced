import { ChatHeaderStyles } from './styles';

export interface Props {

  /** id of the chat */
  id?: string | number;

  /** title of the chat */
  title?: string;

  /** description to be displayed as a subtitle */
  description?: string;

  /** pass in a style object to override the default styles */
  customStyle?: ChatHeaderStyles;
}

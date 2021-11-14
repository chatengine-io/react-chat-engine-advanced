import { AttachmentStyles } from './styles';

export interface Props {
  file: string;
  imageUrl?: string;
  onRemove?: () => void;
  style?: AttachmentStyles;
}

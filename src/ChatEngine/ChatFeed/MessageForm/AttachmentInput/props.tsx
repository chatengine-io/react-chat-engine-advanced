import { AttachmentInputStyles } from './styles';

export interface Props {
  onSelectFiles: (e: FileList | null) => void;
  customStyle?: AttachmentInputStyles;
}

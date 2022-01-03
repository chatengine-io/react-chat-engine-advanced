import { AttachmentInputStyles } from './styles';

export interface Props extends AttachmentInputStyles {
  onSelectFiles: (e: FileList | null) => void;
}

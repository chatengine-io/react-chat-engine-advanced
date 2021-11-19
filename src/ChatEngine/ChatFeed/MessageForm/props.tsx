import { MessageFormStyles } from './styles';

export interface Props extends MessageFormStyles {
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: string, attachments: Array<File>) => void;
}

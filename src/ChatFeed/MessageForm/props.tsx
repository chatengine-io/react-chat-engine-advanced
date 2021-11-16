import { MessageFormStyles } from './styles';

export interface Props {
  value?: string;
  label?: string;
  customStyle?: MessageFormStyles;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: string, attachments: Array<File>) => void;
}

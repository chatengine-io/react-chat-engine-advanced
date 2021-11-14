import { MessageFormStyles } from './styles';

export interface Props {
  value?: string;
  label?: string;
  style?: MessageFormStyles;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

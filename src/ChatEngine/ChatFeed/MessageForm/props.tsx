import { MessageFormStyles } from './styles';

export interface Props extends MessageFormStyles {
  // Data
  value?: string;
  label?: string;
  // Hooks
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: string, attachments: Array<File>) => void;
  // Render Functions
  renderMessageForm?: (props: Props) => React.FC<Props>;
}

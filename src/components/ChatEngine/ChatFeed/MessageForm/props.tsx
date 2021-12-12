import { MessageFormStyles } from './styles';

import { MessageProps } from '../../../../interfaces';

export interface Props extends MessageFormStyles {
  // Data
  value?: string;
  label?: string;
  myUsername: string;
  // Hooks
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (message: MessageProps) => void;
  // Render Functions
  renderMessageForm?: (props: Props) => React.FC<Props>;
}

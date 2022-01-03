import { MessageFormStyles } from './styles';

import { MessageObject } from '../../../../interfaces';

export interface Props extends MessageFormStyles {
  // Data
  value?: string;
  label?: string;
  myUsername?: string;
  // Hooks
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (message: MessageObject) => void;
  // Render Functions
  renderMessageForm?: (props: Props) => React.FC<Props>;
}

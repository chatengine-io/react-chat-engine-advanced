import { MessageFormStyles } from './styles';

import { MessageObject } from '../../../../interfaces';

export interface Props extends MessageFormStyles {
  // Data
  value?: string;
  label?: string;
  username?: string;
  // Hooks
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (message: MessageObject) => void;
  // Render Functions
  renderMessageForm?: (props: Props) => JSX.Element | Element | React.FC<Props>;
}

import { MessageFormStyles } from './styles';

import { MessageObject } from '../../../../interfaces';

export interface MessageFormProps extends MessageFormStyles {
  // Data
  value?: string;
  label?: string;
  username?: string;
  // Hooks
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (message: MessageObject) => void;
  // Render Functions
  renderMessageForm?: (
    props: MessageFormProps
  ) => JSX.Element | Element | React.FC<MessageFormProps>;
}

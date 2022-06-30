import { HTMLAttributes } from 'react';

import { ChatFormStyles } from './styles';

export interface ChatFormProps
  extends HTMLAttributes<HTMLFormElement>,
    ChatFormStyles {
  // Hooks
  onFormSubmit?: (value: string) => void;
  // Render Functions
  renderChatForm?: (
    props: ChatFormProps
  ) => JSX.Element | Element | React.FC<ChatFormProps>;
}

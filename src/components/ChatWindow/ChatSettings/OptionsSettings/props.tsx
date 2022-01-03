import { OptionsSettingsStyles } from './styles';

import { ChatProps } from '../../../../interfaces';

export interface Props extends OptionsSettingsStyles {
  chat?: ChatProps;
  // Hooks
  onDeleteChatClick?: (chat: ChatProps) => void;
  // Render Functions
  renderOptionsSettings?: (props: Props) => React.FC<Props>;
}

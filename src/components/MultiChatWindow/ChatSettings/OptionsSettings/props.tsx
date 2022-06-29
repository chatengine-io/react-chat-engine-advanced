import { OptionsSettingsStyles } from './styles';

import { ChatObject } from '../../../../interfaces';

export interface Props extends OptionsSettingsStyles {
  chat?: ChatObject;
  // Hooks
  onDeleteChatClick?: (chat: ChatObject) => void;
  // Render Functions
  renderOptionsSettings?: (
    props: Props
  ) => JSX.Element | Element | React.FC<Props>;
}

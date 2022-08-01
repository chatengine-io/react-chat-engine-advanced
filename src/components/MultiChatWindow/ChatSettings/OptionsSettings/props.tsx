import { OptionsSettingsStyles } from './styles';

import { ChatObject } from '../../../../interfaces';

export interface OptionsSettingsProps extends OptionsSettingsStyles {
  chat?: ChatObject;
  // Hooks
  onDeleteChatClick?: (chat: ChatObject) => Promise<void>;
  // Render Functions
  renderOptionsSettings?: (
    props: OptionsSettingsProps
  ) => JSX.Element | Element | React.FC<OptionsSettingsProps>;
}

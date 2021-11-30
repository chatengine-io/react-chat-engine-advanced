import { OptionsSettingsStyles } from './styles';

import { ChatProps } from '../../../util/interfaces';

export interface Props extends OptionsSettingsStyles {
  chat?: ChatProps;
  onDeleteChat?: (chat: ChatProps) => void;
}

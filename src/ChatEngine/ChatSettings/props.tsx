import { ChatSettingsStyles } from './styles';
import { ChatProps } from '../../util/interfaces';

export interface Props extends ChatSettingsStyles {
  chat?: ChatProps;
  myUsername?: string;
  isLoading?: boolean;
}

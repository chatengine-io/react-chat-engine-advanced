import { ChatSettingsStyles } from './styles';
import { ChatProps, PersonProps } from '../../util/interfaces';

export interface Props extends ChatSettingsStyles {
  chat?: ChatProps;
  otherPeople?: Array<PersonProps>;
  myUsername?: string;
  isLoading?: boolean;
}

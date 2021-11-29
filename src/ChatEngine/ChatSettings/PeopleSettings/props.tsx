import { PeopleSettingsStyles } from './styles';

import { ChatProps, PersonProps } from '../../../util/interfaces';

export interface Props extends PeopleSettingsStyles {
  chat: ChatProps;
  canDelete?: boolean;
  onPersonAdd?: (person: PersonProps) => void;
  onPersonDelete?: (person: PersonProps) => void;
}

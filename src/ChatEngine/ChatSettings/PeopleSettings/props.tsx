import { PeopleSettingsStyles } from './styles';

import { ChatProps, PersonProps } from '../../../util/interfaces';

export interface Props extends PeopleSettingsStyles {
  chat?: ChatProps;
  otherPeople?: Array<PersonProps>;
  // State
  canDelete?: boolean;
  // Hooks
  onPersonAdd?: (person: PersonProps) => void;
  onPersonDelete?: (person: PersonProps) => void;
  // Render Functions
  renderPeopleSettings?: (props: Props) => React.FC<Props>;
}

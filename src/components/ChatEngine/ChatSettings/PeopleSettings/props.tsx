import { PeopleSettingsStyles } from './styles';

import { ChatProps, PersonProps } from '../../../../interfaces';

export interface Props extends PeopleSettingsStyles {
  chat?: ChatProps;
  peopleToInvite?: Array<PersonProps>;
  // State
  canDelete?: boolean;
  // Hooks
  onInvitePersonClick?: (person: PersonProps) => void;
  onPersonDelete?: (person: PersonProps) => void;
  // Render Functions
  renderPeopleSettings?: (props: Props) => React.FC<Props>;
}

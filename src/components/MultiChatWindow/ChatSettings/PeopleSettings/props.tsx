import { PeopleSettingsStyles } from './styles';

import { ChatObject, PersonObject } from '../../../../interfaces';

export interface PeopleSettingsProps extends PeopleSettingsStyles {
  chat?: ChatObject;
  peopleToInvite?: Array<PersonObject>;
  // State
  canDelete?: boolean;
  // Hooks
  onInvitePersonClick?: (person: PersonObject) => void;
  onRemovePersonClick?: (person: PersonObject) => void;
  // Render Functions
  renderPeopleSettings?: (
    props: PeopleSettingsProps
  ) => JSX.Element | Element | React.FC<PeopleSettingsProps>;
}

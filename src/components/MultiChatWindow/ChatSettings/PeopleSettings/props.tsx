import { PeopleSettingsStyles } from './styles';

import { ChatObject, PersonObject } from '../../../../interfaces';

export interface Props extends PeopleSettingsStyles {
  chat?: ChatObject;
  peopleToInvite?: Array<PersonObject>;
  // State
  canDelete?: boolean;
  // Hooks
  onInvitePersonClick?: (person: PersonObject) => void;
  onRemovePersonClick?: (person: PersonObject) => void;
  // Render Functions
  renderPeopleSettings?: (
    props: Props
  ) => JSX.Element | Element | React.FC<Props>;
}

import { ChatSettingsStyles } from './styles';

import { Props as PeopleSettingsProps } from './PeopleSettings/props';
import { Props as PhotosSettingsProps } from './PhotosSettings/props';
import { Props as OptionsSettingsProps } from './OptionsSettings/props';

import { ChatObject, PersonObject } from '../../../interfaces';

export interface Props extends ChatSettingsStyles {
  chat?: ChatObject;
  peopleToInvite?: Array<PersonObject>;
  username?: string;
  // State
  isLoading?: boolean;
  // Hooks
  onDeleteChatClick?: (chat: ChatObject) => void;
  onInvitePersonClick?: (person: PersonObject) => void;
  onRemovePersonClick?: (person: PersonObject) => void;
  // Render Functions
  renderChatSettings?: (props: Props) => React.FC<Props>;
  renderChatAvatars?: (props: Props) => React.FC<Props>;
  renderPeopleSettings?: (
    props: PeopleSettingsProps
  ) => React.FC<PeopleSettingsProps>;
  renderPhotosSettings?: (
    props: PhotosSettingsProps
  ) => React.FC<PhotosSettingsProps>;
  renderOptionsSettings?: (
    props: OptionsSettingsProps
  ) => React.FC<OptionsSettingsProps>;
}

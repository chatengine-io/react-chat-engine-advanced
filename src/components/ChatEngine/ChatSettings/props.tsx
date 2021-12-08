import { ChatSettingsStyles } from './styles';

import { Props as PeopleSettingsProps } from './PeopleSettings/props';
import { Props as PhotosSettingsProps } from './PhotosSettings/props';
import { Props as OptionsSettingsProps } from './OptionsSettings/props';

import { ChatProps, PersonProps } from '../../../interfaces';

export interface Props extends ChatSettingsStyles {
  chat?: ChatProps;
  peopleToInvite?: Array<PersonProps>;
  myUsername?: string;
  // State
  isLoading?: boolean;
  // Hooks
  onDeleteChatClick?: (chat: ChatProps) => void;
  onInvitePersonClick?: (person: PersonProps) => void;
  // Render Functions
  renderChatSettings?: (props: Props) => React.FC<Props>;
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

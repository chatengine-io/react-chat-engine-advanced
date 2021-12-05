import { ChatSettingsStyles } from './styles';

import { Props as PeopleSettingsProps } from './PeopleSettings/props';
import { Props as PhotosSettingsProps } from './PhotosSettings/props';
import { Props as OptionsSettingsProps } from './OptionsSettings/props';

import { ChatProps, PersonProps } from '../../util/interfaces';

export interface Props extends ChatSettingsStyles {
  chat?: ChatProps;
  otherPeople?: Array<PersonProps>;
  myUsername?: string;
  // State
  isLoading?: boolean;
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

import { ChatSettingsStyles } from './styles';

import { Props as ChatAvatarsProps } from './ChatAvatars/props';
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
  renderChatSettings?: (
    props: Props
  ) => JSX.Element | Element | React.FC<Props>;
  renderChatAvatars?: (
    props: ChatAvatarsProps
  ) => JSX.Element | Element | React.FC<ChatAvatarsProps>;
  renderPeopleSettings?: (
    props: PeopleSettingsProps
  ) => JSX.Element | Element | React.FC<PeopleSettingsProps>;
  renderPhotosSettings?: (
    props: PhotosSettingsProps
  ) => JSX.Element | Element | React.FC<PhotosSettingsProps>;
  renderOptionsSettings?: (
    props: OptionsSettingsProps
  ) => JSX.Element | Element | React.FC<OptionsSettingsProps>;
}

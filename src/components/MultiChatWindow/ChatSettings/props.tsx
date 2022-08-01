import { ChatSettingsStyles } from './styles';

import { ChatAvatarsProps } from './ChatAvatars/props';
import { PeopleSettingsProps } from './PeopleSettings/props';
import { PhotosSettingsProps } from './PhotosSettings/props';
import { OptionsSettingsProps } from './OptionsSettings/props';

import { ChatObject, PersonObject } from '../../../interfaces';

export interface ChatSettingsProps extends ChatSettingsStyles {
  chat?: ChatObject;
  peopleToInvite?: Array<PersonObject>;
  username?: string;
  // State
  isLoading?: boolean;
  // Hooks
  onDeleteChatClick?: (chat: ChatObject) => Promise<void>;
  onInvitePersonClick?: (person: PersonObject) => Promise<void>;
  onRemovePersonClick?: (person: PersonObject) => Promise<void>;
  // Render Functions
  renderChatSettings?: (
    props: ChatSettingsProps
  ) => JSX.Element | Element | React.FC<ChatSettingsProps>;
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

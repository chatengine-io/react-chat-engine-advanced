import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatAvatars } from './ChatAvatars';
import { PeopleSettings } from './PeopleSettings';
import { PhotosSettings } from './PhotosSettings';
import { OptionsSettings } from './OptionsSettings';

export const ChatSettings: React.FC<Props> = (props: Props) => {
  const { chat } = props;

  if (props.renderChatSettings) {
    return <>{props.renderChatSettings(props)}</>;
  }

  const people = chat ? chat.people.map((chatPerson) => chatPerson.person) : [];

  const otherPerson =
    chat &&
    chat.people.find((person) => person.person.username !== props.myUsername);
  const title =
    props.isLoading || !chat
      ? ''
      : chat.is_direct_chat && otherPerson
      ? otherPerson.person.username
      : chat.title;

  return (
    <div style={{ ...styles.chatSettingsStyle, ...props.chatSettingsStyle }}>
      <ChatAvatars users={people} myUsername={props.myUsername} />

      <div style={{ ...styles.chatTitleStyle, ...props.chatTitleStyle }}>
        {title}
      </div>

      <PeopleSettings
        chat={chat}
        peopleToInvite={props.peopleToInvite}
        canDelete={chat && props.myUsername === chat.admin.username}
        onInvitePersonClick={props.onInvitePersonClick}
        onRemovePersonClick={props.onRemovePersonClick}
        renderPeopleSettings={props.renderPeopleSettings}
        style={{ ...styles.peopleSettingsStyle, ...props.peopleSettingsStyle }}
      />

      <PhotosSettings
        chat={chat}
        renderPhotosSettings={props.renderPhotosSettings}
        style={{ ...styles.photosSettingsStyle, ...props.photosSettingsStyle }}
      />

      <OptionsSettings
        chat={chat}
        onDeleteChatClick={props.onDeleteChatClick}
        renderOptionsSettings={props.renderOptionsSettings}
        style={{
          ...styles.optionsSettingsStyle,
          ...props.optionsSettingsStyle,
        }}
      />
    </div>
  );
};
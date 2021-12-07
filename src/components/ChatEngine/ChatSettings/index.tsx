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

  return (
    <div style={{ ...styles.chatSettingsStyle, ...props.chatSettingsStyle }}>
      <ChatAvatars users={people} myUsername={props.myUsername} />

      <div style={{ ...styles.chatTitleStyle, ...props.chatTitleStyle }}>
        {!props.isLoading && chat && chat.title}
      </div>

      <PeopleSettings
        chat={chat}
        otherPeople={props.otherPeople}
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
        renderOptionsSettings={props.renderOptionsSettings}
        style={{
          ...styles.optionsSettingsStyle,
          ...props.optionsSettingsStyle,
        }}
      />
    </div>
  );
};

import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Spinner } from '../../Components/Spinner';

import { ChatAvatars } from './ChatAvatars';
import { PeopleSettings } from './PeopleSettings';
import { PhotosSettings } from './PhotosSettings';
import { OptionsSettings } from './OptionsSettings';

export const ChatSettings: React.FC<Props> = (props: Props) => {
  const { chat } = props;

  return (
    <div style={{ ...styles.chatSettingsStyle, ...props.chatSettingsStyle }}>
      <ChatAvatars
        users={chat ? chat.people : []}
        myUsername={props.myUsername}
      />

      <div style={{ ...styles.chatTitleStyle, ...props.chatTitleStyle }}>
        {props.isLoading || !chat ? <Spinner /> : chat.title}
      </div>

      <PeopleSettings
        chat={chat}
        otherPeople={props.otherPeople}
        style={{ ...styles.peopleSettingsStyle, ...props.peopleSettingsStyle }}
      />

      <PhotosSettings
        chat={chat}
        style={{ ...styles.photosSettingsStyle, ...props.photosSettingsStyle }}
      />

      <OptionsSettings
        chat={chat}
        style={{
          ...styles.optionsSettingsStyle,
          ...props.optionsSettingsStyle,
        }}
      />
    </div>
  );
};

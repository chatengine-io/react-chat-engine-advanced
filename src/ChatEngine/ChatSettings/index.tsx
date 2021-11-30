import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatAvatars } from './ChatAvatars';
import { PeopleSettings } from './PeopleSettings';
import { PhotosSettings } from './PhotosSettings';

export const ChatSettings: React.FC<Props> = ({
  chat,
  myUsername,
  isLoading = false,
  chatSettingsStyle = {},
}: Props) => {
  return (
    <div style={{ ...styles.chatSettingsStyle, ...chatSettingsStyle }}>
      <ChatAvatars users={chat ? chat.people : []} myUsername={myUsername} />

      <PeopleSettings chat={chat} />

      <PhotosSettings chat={chat} />

      {isLoading && <div>Loading...</div>}
    </div>
  );
};

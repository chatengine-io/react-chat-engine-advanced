import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatAvatars } from './ChatAvatars';

export const ChatSettings: React.FC<Props> = ({
  chat,
  myUsername,
  chatSettingsStyle = {},
}: Props) => {
  return (
    <div style={{ ...styles.chatSettingsStyle, ...chatSettingsStyle }}>
      <ChatAvatars users={chat.people} myUsername={myUsername} />
    </div>
  );
};

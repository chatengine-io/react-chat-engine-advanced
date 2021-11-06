import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

export const ChatList: React.FC<Props> = ({ style = {}, loading = false }) => {
  const loadingStyle = loading ? styles.loadingStyle : {};

  return (
    <div
      style={{
        ...styles.chatListContainer,
        ...loadingStyle,
        ...style,
      }}
      className="ce-chat-list"
    >
      <ChatForm onFormSubmit={(title) => console.log('New Chat', title)} />

      <ChatCard
        title="Chat 1"
        description="Hey it's Adam"
        timeStamp="12:23 PM"
      />
      <ChatCard
        title="Chat 1"
        description="Hey it's Adam"
        timeStamp="12:23 PM"
      />
      <ChatCard
        title="Chat 1"
        description="Hey it's Adam"
        timeStamp="12:23 PM"
      />
    </div>
  );
};

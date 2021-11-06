import React from 'react';

import { Props, ChatProps } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

// const { htmlToText } = require('html-to-text');

export const ChatList: React.FC<Props> = ({
  style = {},
  loading = false,
  chats = [],
}) => {
  const loadingStyle = loading ? styles.loadingStyle : {};

  const getDateTime = (date: string, offset = 0) => {
    if (!date) return '';

    date = date.replace(' ', 'T');
    offset = offset ? offset : 0;

    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    const hour = date.substr(11, 2);
    const minute = date.substr(14, 2);
    const second = date.substr(17, 2);

    var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    d.setHours(d.getHours() + offset);
    return d;
  };

  const renderChats = (chats: Array<ChatProps>) => {
    return chats.map((chat, index) => {
      const timeStamp = getDateTime(chat.created).toString().substr(4, 6);
      const description =
        chat.last_message?.text === '' ? 'Say hello!' : chat.last_message?.text;

      return (
        <ChatCard
          key={`chat_${index}`}
          title={chat.title}
          description={description}
          timeStamp={timeStamp}
        />
      );
    });
  };

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

      {renderChats(chats)}
    </div>
  );
};

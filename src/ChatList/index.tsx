import React from 'react';

import { Props, ChatProps } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

import { getDateTime } from '../util/dateTime';

export const ChatList: React.FC<Props> = ({
  style = {},
  chats = [],
  activeChatID = -1,
  onChatClick = () => {},
  onChatFormSubmit = () => {},
  isLoading = false,
}) => {
  const loadingStyle = isLoading ? styles.loadingStyle : {};

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
          isActive={activeChatID === chat.id}
          onClick={() => onChatClick(chat.id)}
        />
      );
    });
  };

  const renderLoading = () => {
    return [...Array(10)].map((_, i) => {
      return <ChatCard key={`chat_${i}`} isLoading={true} />;
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
      <ChatForm onFormSubmit={onChatFormSubmit} />

      {isLoading ? renderLoading() : renderChats(chats)}
    </div>
  );
};

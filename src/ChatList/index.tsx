import React from 'react';

import { Props, ChatProps } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';
import { ChatLoader } from './ChatLoader';

import { getDateTime } from '../util/dateTime';

export const ChatList: React.FC<Props> = ({
  chats,
  userName,
  activeChatID = -1,
  onChatClick = () => {},
  onChatFormSubmit = () => {},
  onChatLoaderVisible = () => {},
  isLoading = false,
  hasMoreChats = false,
  style = {},
}) => {
  const loadingStyle = isLoading ? styles.loadingStyle : {};

  const readLastMessage = (userName: string, chat: ChatProps) => {
    let hasReadLastMessage = false;
    chat.people.map((chatPerson) => {
      if (
        userName === chatPerson.person.username && // This is your ChatPerson instance
        chatPerson.last_read === chat.last_message.id // and you read the last message
      ) {
        hasReadLastMessage = true;
      }
    });
    return hasReadLastMessage;
  };

  const renderChats = (chats: Array<ChatProps>) => {
    return chats.map((chat, index) => {
      const description =
        chat.last_message?.text === '' ? 'Say hello!' : chat.last_message?.text;
      const timeStamp = getDateTime(chat.created).toString().substr(4, 6);
      const hasNotification = userName
        ? !readLastMessage(userName, chat)
        : false;

      return (
        <ChatCard
          key={`chat_${index}`}
          title={chat.title}
          description={description}
          timeStamp={timeStamp}
          isActive={activeChatID === chat.id}
          hasNotification={hasNotification}
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

      {hasMoreChats && <ChatLoader onVisible={onChatLoaderVisible} />}
    </div>
  );
};

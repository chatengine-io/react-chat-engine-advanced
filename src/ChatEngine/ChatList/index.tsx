import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

import { RenderTrigger } from '../../Components/RenderTrigger';

import { ChatProps } from '../../util/interfaces';
import { getDateTime } from '../../util/dateTime';

export const ChatList: React.FC<Props> = ({
  chats,
  userName,
  activeChatID = -1,
  onChatClick = () => {},
  onChatFormSubmit = () => {},
  onChatLoaderVisible = () => {},
  isLoading = false,
  hasMoreChats = false,
  chatListStyle = {},
  chatListLoadingStyle = {},
  chatListLoadTriggerStyle = {},
}) => {
  const readLastMessage = (userName: string, chat: ChatProps) => {
    return chat.people.some(
      (chatPerson) =>
        userName === chatPerson.username &&
        chatPerson.last_read === chat.last_message.id
    );
  };

  const renderChats = (chats: Array<ChatProps>) => {
    return chats.map((chat, index) => {
      const description =
        chat.last_message.text !== null ? chat.last_message.text : 'Say hello!';
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
      className="ce-chat-feed"
      style={{
        // Default
        ...styles.chatListStyle,
        // State
        ...(isLoading ? styles.chatListLoadingStyle : {}),
        // Props
        ...chatListStyle,
        // Props + State
        ...(isLoading ? chatListLoadingStyle : {}),
      }}
    >
      <ChatForm onFormSubmit={onChatFormSubmit} />

      {isLoading ? renderLoading() : renderChats(chats)}

      {hasMoreChats && (
        <RenderTrigger
          onShow={onChatLoaderVisible}
          style={{
            ...styles.chatListLoadTriggerStyle,
            ...chatListLoadTriggerStyle,
          }}
          children={`🖐 Loading...`}
        />
      )}
    </div>
  );
};

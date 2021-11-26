import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

import { RenderTrigger } from '../../Components/RenderTrigger';

import { ChatProps } from '../../util/interfaces';
import { getDateTime } from '../../util/dateTime';

import { Spinner } from '../../Components/Spinner';

export const ChatList: React.FC<Props> = ({
  chats,
  activeChatKey = -1,
  myUsername,
  isLoading = false,
  hasMoreChats = false,
  onChatCardClick = () => {},
  onChatFormSubmit = () => {},
  onChatLoaderVisible = () => {},
  chatListStyle = {},
  chatListLoadingStyle = {},
  chatListLoadTriggerStyle = {},
}) => {
  const readLastMessage = (myUsername: string, chat: ChatProps) => {
    return chat.people.some(
      (chatPerson) =>
        myUsername === chatPerson.username &&
        chatPerson.last_read === chat.last_message.id
    );
  };

  const renderChats = (chats: Array<ChatProps>) => {
    return chats.map((chat, index) => {
      const description =
        chat.last_message.text !== null ? chat.last_message.text : 'Say hello!';
      const timeStamp = getDateTime(chat.created).toString().substr(4, 6);
      const hasNotification = myUsername
        ? !readLastMessage(myUsername, chat)
        : false;

      return (
        <ChatCard
          key={`chat_${index}`}
          title={chat.title}
          description={description}
          timeStamp={timeStamp}
          isActive={activeChatKey === chat.id}
          hasNotification={hasNotification}
          onClick={() => onChatCardClick(chat.id)}
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

      {isLoading ? renderLoading() : renderChats(Object.values(chats))}

      {hasMoreChats && (
        <RenderTrigger
          onShow={onChatLoaderVisible}
          style={{
            ...styles.chatListLoadTriggerStyle,
            ...chatListLoadTriggerStyle,
          }}
          children={<Spinner />}
        />
      )}
    </div>
  );
};

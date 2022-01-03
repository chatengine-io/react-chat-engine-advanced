import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatForm } from './ChatForm';
import { ChatCard } from './ChatCard';

import { RenderTrigger } from '../../Components/RenderTrigger';

import { ChatObject } from '../../../interfaces';
import { getDateTime } from '../../util/dateTime';

import { Spinner } from '../../Components/Spinner';

const readLastMessage = (myUsername: string, chat: ChatObject) => {
  return chat.people.some(
    (chatPerson) =>
      chatPerson.person.username === myUsername &&
      chatPerson.last_read === chat.last_message.id
  );
};

const renderLoading = () => {
  return [...Array(10)].map((_, i) => {
    return <ChatCard key={`chat_${i}`} isLoading={true} />;
  });
};

const getDescription = (chat: ChatObject): string => {
  if (!chat.last_message.id) {
    return 'Say hello!';
  }
  if (chat.last_message.text === null) {
    return `${chat.last_message.attachments.length} attachments`;
  }
  return chat.last_message.text;
};

export const ChatList: React.FC<Props> = (props: Props) => {
  const { activeChatId = -1 } = props;

  const renderChats = (chats: Array<ChatObject>) => {
    return chats.map((chat, index) => {
      const otherPerson =
        chat &&
        chat.people.find(
          (person) => person.person.username !== props.myUsername
        );
      const title = !chat
        ? ''
        : chat.is_direct_chat && otherPerson
        ? otherPerson.person.username
        : chat.title;
      const timeStamp = getDateTime(chat.created, props.timezoneOffset)
        .toString()
        .substr(4, 6);
      const hasNotification = props.myUsername
        ? !readLastMessage(props.myUsername, chat)
        : false;
      return (
        <ChatCard
          key={`chat_${index}`}
          title={title}
          description={getDescription(chat)}
          timeStamp={timeStamp}
          isActive={activeChatId === chat.id}
          hasNotification={hasNotification}
          onClick={() =>
            props.onChatCardClick && props.onChatCardClick(chat.id)
          }
          renderChatCard={props.renderChatCard}
        />
      );
    });
  };

  if (props.renderChatList) {
    return <>{props.renderChatList(props)}</>;
  }

  return (
    <div
      className="ce-chat-list"
      style={{
        // Default
        ...styles.style,
        // State
        ...(props.isLoading ? { overflowY: 'hidden' } : {}),
        // Props
        ...props.style,
      }}
    >
      <ChatForm
        onFormSubmit={props.onChatFormSubmit}
        renderChatForm={props.renderChatForm}
      />

      {props.isLoading ? renderLoading() : renderChats(props.chats)}

      {props.hasMoreChats && (
        <RenderTrigger
          onShow={props.onChatLoaderShow}
          style={{
            ...styles.loadingMoreChatsStyle,
            ...props.loadingMoreChatsStyle,
          }}
          children={<Spinner />}
        />
      )}
    </div>
  );
};

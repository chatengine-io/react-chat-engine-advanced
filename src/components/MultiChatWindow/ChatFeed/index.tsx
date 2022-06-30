import React from 'react';

import { ChatFeedProps } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { WelcomeGif } from './WelcomeGif';

import { getDateTime, formatDateTime } from '../../util/dateTime';

import { Spinner } from '../../Components/Spinner';
import { ChatObject } from '../../../interfaces';

const getDescription = (
  chat: ChatObject | undefined,
  timezoneOffset: number = 0
) => {
  if (!chat) {
    return '⬅️ ⬅️ ⬅️';
  } else if (
    chat.last_message.created &&
    chat.last_message.created.length > 0
  ) {
    const dateTime = getDateTime(chat.last_message.created, timezoneOffset);
    const formattedDateTime = formatDateTime(dateTime);
    return `Active ${formattedDateTime}`;
  } else {
    return 'Say hello!';
  }
};

export const ChatFeed: React.FC<ChatFeedProps> = (props: ChatFeedProps) => {
  const { chat } = props;

  const otherPerson =
    chat &&
    chat.people.find((person) => person.person.username !== props.username);

  const title = props.isLoading ? (
    <Spinner />
  ) : !chat ? (
    'Create a chat!'
  ) : chat.is_direct_chat && otherPerson ? (
    otherPerson.person.username
  ) : (
    chat.title
  );

  if (props.renderChatFeed) {
    return <>{props.renderChatFeed(props)}</>;
  }

  return (
    <div className="ce-chat-feed" style={{ ...styles.style, ...props.style }}>
      <ChatHeader
        title={title}
        description={
          props.isLoading
            ? 'Loading...'
            : getDescription(chat, props.timezoneOffset)
        }
        renderChatHeader={props.renderChatHeader}
        style={{
          ...styles.chatHeaderStyle,
          ...props.chatHeaderStyle,
        }}
      />

      <MessageList
        chat={chat}
        messages={props.messages}
        username={props.username}
        timezoneOffset={props.timezoneOffset}
        hasMoreMessages={props.hasMoreMessages}
        onMessageLoaderShow={props.onMessageLoaderShow}
        onMessageLoaderHide={props.onMessageLoaderHide}
        onBottomMessageShow={props.onBottomMessageShow}
        onBottomMessageHide={props.onBottomMessageHide}
        renderMessageList={props.renderMessageList}
        renderMessage={props.renderMessage}
        style={{
          ...styles.messageListStyle,
          ...props.messageListStyle,
        }}
      />

      {props.messages.length === 0 && !props.isLoading && (
        <WelcomeGif
          style={{
            position: 'absolute',
            top: 'calc(50% - 112px)',
          }}
        />
      )}

      <MessageForm
        label="Send a message..."
        username={props.username}
        onSubmit={props.onMessageFormSubmit}
        renderMessageForm={props.renderMessageForm}
        style={{
          ...styles.messageFormStyle,
          ...props.messageFormStyle,
        }}
      />
    </div>
  );
};

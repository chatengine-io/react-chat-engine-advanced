import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';
import { WelcomeGif } from './WelcomeGif';

import { getDateTime, formatDateTime } from '../../util/dateTime';

import { Spinner } from '../../Components/Spinner';
import { ChatProps } from '../../../interfaces';

const getDescription = (chat: ChatProps | undefined) => {
  if (
    chat &&
    chat.last_message.created &&
    chat.last_message.created.length > 0
  ) {
    const dateTime = getDateTime(chat.last_message.created, 0);
    const formattedDateTime = formatDateTime(dateTime);
    return `Active ${formattedDateTime}`;
  } else {
    return 'Say hello!';
  }
};

export const ChatFeed: React.FC<Props> = (props: Props) => {
  const { chat } = props;

  const otherPerson =
    chat &&
    chat.people.find((person) => person.person.username !== props.myUsername);

  const title =
    !chat || props.isLoading ? (
      <Spinner />
    ) : chat.is_direct_chat && otherPerson ? (
      otherPerson.person.username
    ) : (
      chat.title
    );

  if (props.renderChatFeed) {
    return <>{props.renderChatFeed(props)}</>;
  }

  return (
    <div className="ch-chat-feed" style={{ ...styles.style, ...props.style }}>
      <ChatHeader
        title={title}
        description={props.isLoading ? 'Loading...' : getDescription(chat)}
        renderChatHeader={props.renderChatHeader}
        style={{
          ...styles.chatHeaderStyle,
          ...props.chatHeaderStyle,
        }}
      />

      <MessageList
        chat={chat}
        messages={props.messages}
        myUsername={props.myUsername}
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
        myUsername={props.myUsername}
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

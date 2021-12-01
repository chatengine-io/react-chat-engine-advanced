import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

import { getDateTime, formatDateTime } from '../../util/dateTime';

import { Spinner } from '../../Components/Spinner';

export const ChatFeed: React.FC<Props> = (props: Props) => {
  const { chat } = props;

  const getDescription = () => {
    if (
      chat &&
      chat.last_message.created &&
      chat.last_message.created.length > 0
    ) {
      const dateTime = getDateTime(chat.last_message.created, 0);
      const formattedDateTime = formatDateTime(dateTime);
      return `Active ${formattedDateTime}`;
    } else if (props.isLoading) {
      return 'Loading...';
    } else {
      return 'Say hello!';
    }
  };

  if (props.renderChatFeed) {
    return <>{props.renderChatFeed(props)}</>;
  }

  return (
    <div
      className="ch-chat-feed"
      style={{ ...styles.chatFeedStyle, ...props.chatFeedStyle }}
    >
      <ChatHeader
        title={chat ? chat.title : <Spinner />}
        description={getDescription()}
        renderChatHeader={props.renderChatHeader}
        style={{
          ...styles.chatHeaderStyle,
          ...props.chatHeaderStyle,
        }}
      />

      <MessageList
        messages={props.messages}
        myUsername={props.myUsername}
        hasMoreMessages={props.hasMoreMessages}
        onTopMessageShow={props.onTopMessageShow}
        onBottomMessageShow={props.onBottomMessageShow}
        renderMessageList={props.renderMessageList}
        messageListStyle={{
          ...styles.messageListStyle,
          ...props.messageListStyle,
        }}
      />

      <MessageForm
        label="Send a message..."
        onSubmit={props.onMessageSend}
        renderMessageForm={props.renderMessageForm}
        messageFormStyle={{
          ...styles.messageFormStyle,
          ...props.messageFormStyle,
        }}
      />
    </div>
  );
};

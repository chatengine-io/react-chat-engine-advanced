import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

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

  if (props.renderChatFeed) {
    return <>{props.renderChatFeed(props)}</>;
  }

  return (
    <div className="ch-chat-feed" style={{ ...styles.style, ...props.style }}>
      <ChatHeader
        title={chat ? chat.title : <Spinner />}
        description={props.isLoading ? 'Loading...' : getDescription(chat)}
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
        renderMessage={props.renderMessage}
        style={{
          ...styles.messageListStyle,
          ...props.messageListStyle,
        }}
      />

      <MessageForm
        label="Send a message..."
        myUsername={props.myUsername}
        onSubmit={props.onMessageSend}
        renderMessageForm={props.renderMessageForm}
        style={{
          ...styles.messageFormStyle,
          ...props.messageFormStyle,
        }}
      />
    </div>
  );
};

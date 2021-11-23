import React from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

import { getDateTime, formatDateTime } from '../../util/dateTime';

export const ChatFeed: React.FC<Props> = ({
  chat,
  messages,
  myUsername,
  isLoading = false,
  onTopMessageShow,
  onBottomMessageShow,
  chatFeedStyle = {},
}: Props) => {
  const getDescription = () => {
    if (chat.last_message.created && chat.last_message.created.length > 0) {
      const dateTime = getDateTime(chat.last_message.created, 0);
      const formattedDateTime = formatDateTime(dateTime);
      return `Active ${formattedDateTime}`;
    } else if (isLoading) {
      return 'Loading...';
    } else {
      return 'Say hello!';
    }
  };

  const messageListStyle: Properties = {
    height: 'calc(100% - 128px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
  };

  const messageFormStyle: Properties = {
    width: '100%',
    position: 'absolute',
    bottom: '0px',
  };

  return (
    <div style={{ ...styles.chatFeedStyle, ...chatFeedStyle }}>
      <ChatHeader title={chat.title} description={getDescription()} />

      <MessageList
        messages={messages}
        myUsername={myUsername}
        onTopMessageShow={onTopMessageShow}
        onBottomMessageShow={onBottomMessageShow}
        messageListStyle={messageListStyle}
      />

      <MessageForm
        label="Send a message..."
        messageFormStyle={messageFormStyle}
      />
    </div>
  );
};

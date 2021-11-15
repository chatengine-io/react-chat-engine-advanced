import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

import { getDateTime, formatDateTime } from '../util/dateTime';

export const ChatFeed: React.FC<Props> = ({
  chat,
  messages,
  myUsername,
  isLoading = false,
  style = {},
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

  return (
    <div style={{ ...styles.chatFeed, ...style.chatFeed }}>
      <ChatHeader title={chat.title} description={getDescription()} />

      <div
        id="ce-feed-container"
        style={{
          height: 'calc(100% - 128px)',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <MessageList messages={messages} myUsername={myUsername} />

        <div className="ce-feed-container-bottom" />
      </div>

      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '0px',
        }}
      >
        <MessageForm />
      </div>
    </div>
  );
};

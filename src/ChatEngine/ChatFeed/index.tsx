import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageForm } from './MessageForm';

import { getDateTime, formatDateTime } from '../../util/dateTime';

export const ChatFeed: React.FC<Props> = ({
  messages,
  chat,
  myUsername,
  isLoading = false,
  onTopMessageShow,
  onBottomMessageShow,
  chatFeedStyle = {},
  chatHeaderStyle = {},
  messageListStyle = {},
  messageFormStyle = {},
}: Props) => {
  const getDescription = () => {
    if (
      chat &&
      chat.last_message.created &&
      chat.last_message.created.length > 0
    ) {
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
    <div
      className="ch-chat-feed"
      style={{ ...styles.chatFeedStyle, ...chatFeedStyle }}
    >
      <ChatHeader
        title={chat ? chat.title : ''}
        description={getDescription()}
        chatHeaderStyle={{ ...styles.chatHeaderStyle, ...chatHeaderStyle }}
      />

      <MessageList
        messages={messages}
        myUsername={myUsername}
        onTopMessageShow={onTopMessageShow}
        onBottomMessageShow={onBottomMessageShow}
        messageListStyle={{ ...styles.messageListStyle, ...messageListStyle }}
      />

      <MessageForm
        label="Send a message..."
        messageFormStyle={{ ...styles.messageFormStyle, ...messageFormStyle }}
      />
    </div>
  );
};

import React from 'react';

import { Props } from './props';

import { Message } from './Message';

export const MessageList: React.FC<Props> = ({
  messages,
  chat,
  myUsername,
}) => {
  const keys = Object.keys(messages);

  const date = (date: string) => {
    return date ? date.substr(0, 10) : null;
  };

  const renderMessages = (keys: Array<string>) => {
    return keys.map((key, index) => {
      const message = messages[key];
      const lastKey = index === 0 ? '' : keys[index - 1];
      const nextKey: string = index === keys.length - 1 ? '' : keys[index + 1];

      const lastDate = lastKey !== '' ? date(lastKey) : undefined;
      const thisDate = key !== '' ? date(key) : undefined;

      const showDateTime: boolean = !lastDate || lastDate !== thisDate;
      const isMyMessage: boolean =
        typeof myUsername === 'string' &&
        myUsername === message.sender_username;

      return (
        <div key={`message_${index}`} id={`ce-message-${message.id}`}>
          <Message
            chat={chat}
            message={message}
            lastMessage={messages[lastKey]}
            nextMessage={messages[nextKey]}
            showDateTime={showDateTime}
            isMyMessage={isMyMessage}
          />
        </div>
      );
    });
  };

  return <div>{renderMessages(keys)}</div>;
};

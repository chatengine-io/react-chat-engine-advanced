import React from 'react';

import { Props } from './props';

import { DateTime } from './DateTime';
import { MyMessage } from './MyMessage';
import { TheirMessage } from './TheirMessage';

export const Message: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  chat = null,
  isSending = false,
  isMyMessage = false,
  showDateTime = false,
}) => {
  return (
    <div>
      {showDateTime && <DateTime created={message.created} />}

      {isMyMessage ? (
        <MyMessage
          lastMessage={lastMessage}
          message={message}
          nextMessage={nextMessage}
          chat={chat}
          isSending={isSending}
        />
      ) : (
        <TheirMessage
          lastMessage={lastMessage}
          message={message}
          nextMessage={nextMessage}
          chat={chat}
          isSending={isSending}
        />
      )}
    </div>
  );
};

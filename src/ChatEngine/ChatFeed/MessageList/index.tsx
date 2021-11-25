import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Message } from './Message';
import { RenderTrigger } from '../../..';

export const MessageList: React.FC<Props> = ({
  // Data
  messages = {},
  chat,
  myUsername,
  // State
  hasMoreMessages = false,
  // Callbacks
  onTopMessageShow = () => {},
  onTopMessageHide = () => {},
  onBottomMessageShow = () => {},
  onBottomMessageHide = () => {},
  // Styles
  messageListStyle = {},
  messageStyle = {},
}) => {
  const keys = Object.keys(messages).sort();

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
          {index === keys.length - 1 && (
            <RenderTrigger
              onShow={onBottomMessageShow}
              onHide={onTopMessageHide}
              children=""
            />
          )}

          <Message
            chat={chat}
            message={message}
            lastMessage={messages[lastKey]}
            nextMessage={messages[nextKey]}
            showDateTime={showDateTime}
            isMyMessage={isMyMessage}
            messageStyle={{ ...styles.messageStyle, ...messageStyle }}
          />
        </div>
      );
    });
  };

  return (
    <div
      className="ce-message-list"
      style={{ ...styles.messageListStyle, ...messageListStyle }}
    >
      {hasMoreMessages && (
        <RenderTrigger
          onShow={onTopMessageShow}
          onHide={onBottomMessageHide}
          children="<spinner/>"
        />
      )}

      {renderMessages(keys)}
    </div>
  );
};

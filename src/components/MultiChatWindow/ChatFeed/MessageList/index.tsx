import React from 'react';

import { MessageListProps } from './props';
import { styles } from './styles';

import { Message } from './Message';

import { RenderTrigger } from '../../../Components/RenderTrigger';
import { Spinner } from '../../../Components/Spinner';

import _ from 'lodash';

export const MessageList: React.FC<MessageListProps> = (
  props: MessageListProps
) => {
  const { messages = [] } = props;

  const messagesObject = _.mapKeys(messages, 'created');
  const keys = Object.keys(messagesObject).sort();

  const date = (date: string) => {
    return date ? date.substr(0, 10) : null;
  };

  const renderMessages = (keys: Array<string>) => {
    return keys.map((key, index) => {
      const message = messagesObject[key];
      const lastKey = index === 0 ? '' : keys[index - 1];
      const nextKey: string = index === keys.length - 1 ? '' : keys[index + 1];

      const lastDate = lastKey !== '' ? date(lastKey) : undefined;
      const thisDate = key !== '' ? date(key) : undefined;

      const showDateTime: boolean = !lastDate || lastDate !== thisDate;
      const isMyMessage: boolean = props.username === message.sender_username;

      return (
        <div key={`message_${index}`} id={`ce-message-${message.id}`}>
          {index === keys.length - 1 && (
            <RenderTrigger
              onShow={props.onBottomMessageShow}
              onHide={props.onBottomMessageHide}
              children=""
            />
          )}

          <Message
            chat={props.chat}
            message={message}
            lastMessage={messagesObject[lastKey]}
            nextMessage={messagesObject[nextKey]}
            timezoneOffset={props.timezoneOffset}
            isMyMessage={isMyMessage}
            isSending={!message.id}
            showDateTime={showDateTime}
            renderMessage={props.renderMessage}
            style={{ ...styles.messageStyle, ...props.messageStyle }}
          />
        </div>
      );
    });
  };

  if (props.renderMessageList) {
    return <>{props.renderMessageList(props)}</>;
  }

  return (
    // Used for scrolling
    <div
      className="ce-message-list"
      id={`ce-message-list-${props.chat?.id}`}
      style={{ ...styles.style, ...props.style }}
    >
      {/* used for finding Feed Height */}
      <div
        className="ce-message-list-content"
        id={`ce-message-list-content-${props.chat?.id}`}
      >
        {props.hasMoreMessages && (
          <RenderTrigger
            onShow={props.onMessageLoaderShow}
            onHide={props.onMessageLoaderHide}
            children={
              <Spinner
                style={{
                  position: 'relative',
                  left: 'calc(50% - 0.625em)',
                  width: '1.25em',
                  height: '1.25em',
                  font: 'red',
                }}
              />
            }
          />
        )}

        {renderMessages(keys)}
      </div>
    </div>
  );
};

import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Message } from './Message';

import { RenderTrigger } from '../../../Components/RenderTrigger';
import { Spinner } from '../../../Components/Spinner';

import _ from 'lodash';

export const MessageList: React.FC<Props> = (props: Props) => {
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
      const isMyMessage: boolean =
        typeof props.myUsername === 'string' &&
        props.myUsername === message.sender_username;

      return (
        <div key={`message_${index}`} id={`ce-message-${message.id}`}>
          {index === keys.length - 1 && (
            <RenderTrigger
              onShow={props.onBottomMessageShow}
              onHide={props.onTopMessageHide}
              children=""
            />
          )}

          <Message
            chat={props.chat}
            message={message}
            lastMessage={messagesObject[lastKey]}
            nextMessage={messagesObject[nextKey]}
            showDateTime={showDateTime}
            isMyMessage={isMyMessage}
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
    <div
      className="ce-message-list"
      style={{ ...styles.style, ...props.style }}
    >
      {props.hasMoreMessages && (
        <RenderTrigger
          onShow={props.onTopMessageShow}
          onHide={props.onBottomMessageHide}
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
  );
};

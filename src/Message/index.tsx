import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const Message: React.FC<Props> = ({
  lastMessage,
  message,
  nextMessage,
  isSending = false,
}) => {
  const attachments = message && message.attachments && message.attachments;

  const topRightRadius =
    !lastMessage || lastMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const bottomRightRadius =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';

  const borderRadius = `1.3em ${topRightRadius} ${bottomRightRadius} 1.3em`;
  const paddingBottom =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '12px'
      : '2px';

  return (
    <div
      className="ce-message-row ce-my-message"
      style={{ width: '100%', textAlign: 'right', paddingBottom }}
    >
      <Col xs={12} sm={12} md={12}>
        {/* {message.text && ( */}
        <div
          className={`
                  ce-message-bubble 
                  ce-my-message-bubble 
                  ${isSending && 'ce-my-message-sinding-bubble'}
                `}
          style={{
            ...styles.myMessage,
            ...{ borderRadius },
            ...{
              backgroundColor: isSending ? '#40a9ff' : 'rgb(24, 144, 255)',
            },
          }}
          // onMouseEnter={() => setHovered(true)}
          // onMouseLeave={() => setHovered(false)}
        >
          {/* <Body myMessage={true} text={message.text} /> */}
          Example Text
        </div>
        {/* )} */}
      </Col>
    </div>
  );
};

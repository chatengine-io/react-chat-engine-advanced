import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Avatar } from '../../Avatar';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const TheirMessage: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  // chat = null,
  // isSending = false,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  console.log('hovered', hovered);

  const topLeftRadius =
    !lastMessage || lastMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const bottomLeftRadius =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const borderRadius = `${topLeftRadius} 1.3em 1.3em ${bottomLeftRadius}`;

  const paddingBottom =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '12px'
      : '2px';

  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';

  return (
    <div
      style={{ width: '100%', paddingBottom }}
      className="ce-message-row ce-their-message"
    >
      {(lastMessage === null ||
        lastMessage.sender_username !== message.sender_username) && (
        <div style={styles.nameText} className="ce-their-message-sender">
          {message.sender_username}
        </div>
      )}

      <Row style={{ paddingLeft: '2px' }} className="ce-their-message-row">
        <Col xs={12} sm={12} md={12}>
          <div style={{ height: '0px' }} className="ce-their-message-avatar">
            {(!nextMessage ||
              nextMessage.sender_username !== message.sender_username) && (
              <Avatar
                showOnline={false}
                username={message.sender_username}
                avatarUrl="https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png"
              />
            )}
          </div>

          {message.text !== null && (
            <div style={{ paddingLeft: '48px' }}>
              <div
                className="ce-message-bubble ce-their-message-bubble"
                style={{ ...styles.theirMessage, ...{ borderRadius } }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div
                  className="ce_message"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

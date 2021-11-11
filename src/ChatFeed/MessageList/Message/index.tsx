import React, { useState } from 'react';

import { Props } from './props';
import { myStyles, theirStyles } from './styles';

import { Dot } from '../../../Dot';
import { Avatar } from '../../../Avatar';

import { DateTime } from './DateTime';

import { FileThumb } from './FileThumb';
import { ImageThumb } from './ImageThumb';

import { isImage, getFileName } from '../../../util/file';
import { formatTime, getDateTime } from '../../../util/dateTime';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const Message: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  chat = null,
  isSending = false,
  isMyMessage = false,
  showDateTime = false,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const topRadius =
    !lastMessage || lastMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const bottomRadius =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const borderRadius = isMyMessage
    ? `1.3em ${topRadius} ${bottomRadius} 1.3em`
    : `${topRadius} 1.3em 1.3em ${bottomRadius}`;
  const paddingBottom =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '12px'
      : '2px';
  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';
  const styles = isMyMessage ? myStyles : theirStyles;
  const sendingStyle = isSending
    ? {
        backgroundColor: isSending ? '#40a9ff' : 'rgb(24, 144, 255)',
      }
    : {};

  const renderImages = () => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (isImage(fileName)) {
        return (
          <ImageThumb
            attachment={attachment}
            isLoading={isSending || attachment.file === null}
          />
        );
      }

      return <div key={`attachment${index}`} />;
    });
  };

  const renderFiles = () => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (!isImage(fileName)) {
        return (
          <FileThumb
            attachment={attachment}
            isLoading={isSending || attachment.file === null}
          />
        );
      }

      return <div key={`attachment${index}`} />;
    });
  };

  const renderReads = () => {
    const members = chat !== null ? chat.people : [];
    return members.map((chatPerson, index) => {
      return (
        <Dot
          key={`read_${index}`}
          avatarUrl={chatPerson.person.avatar}
          username={chatPerson.person.username}
          visible={message.id === chatPerson.last_read}
          style={
            isMyMessage
              ? { float: 'right', marginLeft: '4px' }
              : { float: 'left', marginLeft: '4px' }
          }
        />
      );
    });
  };

  return (
    <div>
      {showDateTime && <DateTime created={message.created} />}

      <div
        className={`ce-message-row ${
          isMyMessage ? 'ce-my-message' : 'ce-their-message'
        }`}
        style={
          isMyMessage
            ? {
                width: '100%',
                textAlign: 'right',
                paddingBottom,
              }
            : { width: '100%', paddingBottom }
        }
      >
        {/* Username Test When they Send */}
        {!isMyMessage &&
          (lastMessage === null ||
            lastMessage.sender_username !== message.sender_username) && (
            <div
              style={theirStyles.nameText}
              className="ce-their-message-sender"
            >
              {message.sender_username}
            </div>
          )}

        {/* Username Test When they Send */}
        <Row
          style={{ paddingRight: '2px' }}
          className={`ce-message-bubble-row ${
            isMyMessage ? 'ce-my-message-bubble-row' : 'ce-their-message-row'
          }`}
        >
          <Col xs={12} sm={12} md={12} style={{ display: 'inline-block' }}>
            {/* Sender Avatar when They Send */}
            {!isMyMessage && (
              <div
                style={{ height: '0px' }}
                className="ce-their-message-avatar"
              >
                {(!nextMessage ||
                  nextMessage.sender_username !== message.sender_username) && (
                  <Avatar
                    showOnline={false}
                    username={message.sender_username}
                    avatarUrl="https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png"
                  />
                )}
              </div>
            )}

            {/* Images */}
            <div
              style={{ display: 'auto', paddingLeft: '50px' }}
              className="ce-their-message-attachments-container ce-their-message-images-container"
            >
              {renderImages()}
            </div>

            {/* Files */}
            <div
              style={{ display: 'auto', paddingLeft: '50px' }}
              className="ce-their-message-attachments-container ce-their-message-files-container"
            >
              {renderFiles()}
            </div>

            {message.text !== null && (
              <div style={!isMyMessage ? { paddingLeft: '48px' } : {}}>
                <div
                  className={`
                    ce-message-bubble 
                    ce-${isMyMessage ? 'my' : 'their'}-message-bubble
                    ${isSending && 'ce-my-message-sending-bubble'}
                  `}
                  style={{
                    ...styles.message,
                    ...{ borderRadius },
                    ...sendingStyle,
                  }}
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

            <span
              className="ce-message-timestamp ce-their-message-timestamp"
              style={{
                ...styles.timeTag,
                ...{ opacity: hovered ? '1' : '0' },
              }}
            >
              {formatTime(getDateTime(message.created, 0) as Date)}
            </span>
          </Col>

          <Col
            xs={12}
            style={isMyMessage ? {} : { marginLeft: '48px' }}
            className="ce-reads-row ce-their-reads-row"
          >
            {renderReads()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

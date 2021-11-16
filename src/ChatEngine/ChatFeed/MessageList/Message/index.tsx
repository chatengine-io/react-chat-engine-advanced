import React, { useState } from 'react';

import { Props } from './props';
import { myStyles, theirStyles } from './styles';

import { Dot } from '../../../../Dot';
import { Avatar } from '../../../../Components/Avatar';

import { DateTime } from './DateTime';

import { Attachment } from './Attachment';

import { isImage, getFileName } from '../../../../util/file';
import { formatTime, getDateTime } from '../../../../util/dateTime';

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
  style = {},
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
  const styles = isMyMessage ? myStyles : theirStyles;
  const sendingStyle = isSending ? { backgroundColor: '#40a9ff' } : {};

  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';

  const renderAttachments = (renderImage: boolean) => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (
        (renderImage && isImage(fileName)) ||
        (!renderImage && !isImage(fileName))
      ) {
        return (
          <Attachment
            attachment={attachment}
            isLoading={isSending || attachment.file === null}
            style={{ ...styles.image, ...style.image }}
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
          avatarUrl={chatPerson.avatar}
          username={chatPerson.username}
          visible={message.id === chatPerson.last_read}
          style={{ ...styles.dot, ...style.dot }}
        />
      );
    });
  };

  return (
    <div>
      {showDateTime && (
        <DateTime
          created={message.created}
          style={{ ...styles.dateTime, ...style.dateTime }}
        />
      )}

      <div
        className={`
          ce-message-row 
          ce-${isMyMessage ? 'my' : 'their'}-message
        `}
        style={{
          ...styles.row,
          ...{ paddingBottom },
          ...style.row,
        }}
      >
        {/* Username Test When they Send */}
        {(lastMessage === null ||
          lastMessage.sender_username !== message.sender_username) && (
          <div
            style={{ ...styles.senderText, ...style.senderText }}
            className={`ce-${isMyMessage ? 'my' : 'their'}-message-sender`}
          >
            {message.sender_username}
          </div>
        )}

        {/* Bundle this into .ce-message-row ??? */}
        <Row
          style={{ paddingRight: '2px' }}
          className={`
            ce-message-bubble-row 
            ce-${isMyMessage ? 'my' : 'their'}-message-bubble-row
          `}
        >
          <Col xs={12} sm={12} md={12} style={{ display: 'inline-block' }}>
            {/* Sender Avatar when They Send */}
            {!isMyMessage && (
              <div style={{ height: '0px' }}>
                {(!nextMessage ||
                  nextMessage.sender_username !== message.sender_username) && (
                  <Avatar
                    showOnline={false}
                    username={message.sender_username}
                    style={{ ...styles.avatar, ...style.avatar }}
                    avatarUrl={
                      message.sender &&
                      message.sender !== null &&
                      message.sender.avatar !== null
                        ? message.sender.avatar
                        : undefined
                    }
                  />
                )}
              </div>
            )}

            {/* Images */}
            <div
              style={{ display: 'auto', paddingLeft: '50px' }}
              className={`
                ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
                ce-${isMyMessage ? 'my' : 'their'}-message-images
              `}
            >
              {renderAttachments(true)}
            </div>

            {/* Files */}
            <div
              style={{ display: 'auto', paddingLeft: '50px' }}
              className={`
                ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
                ce-${isMyMessage ? 'my' : 'their'}-message-files
              `}
            >
              {renderAttachments(false)}
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
                    ...style.message,
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
              className={`
                ce-message-timestamp 
                ce-${isMyMessage ? 'my' : 'their'}-message-timestamp
              `}
              style={{
                ...styles.timeTag,
                ...{ opacity: hovered ? '1' : '0' },
                ...style.timeTag,
              }}
            >
              {formatTime(getDateTime(message.created, 0) as Date)}
            </span>
          </Col>

          <Col
            xs={12}
            style={isMyMessage ? {} : { marginLeft: '48px' }}
            className={`
              ce-reads-row
              ce-${isMyMessage ? 'my' : 'their'}-reads-row
            `}
          >
            {renderReads()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

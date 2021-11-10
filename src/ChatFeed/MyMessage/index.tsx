import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Dot } from '../../Dot';

import { Attachment } from '../Attachment';

import { isImage, getFileName } from '../../util/file';
import { formatTime, getDateTime } from '../../util/dateTime';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const MyMessage: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  chat = null,
  isSending = false,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

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

  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';

  const renderImages = () => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (isImage(fileName)) {
        return (
          <Attachment
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
          <Attachment
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
          style={{ float: 'right', marginLeft: '4px' }}
        />
      );
    });
  };

  return (
    <div
      className="ce-message-row ce-my-message"
      style={{
        width: '100%',
        textAlign: 'right',
        paddingBottom,
        // display: 'inline-block',
      }}
    >
      <div
        style={{ display: 'auto' }}
        className="ce-my-message-attachments-container ce-my-message-images-container"
      >
        {renderImages()}
      </div>

      <div
        style={{ display: 'auto' }}
        className="ce-my-message-attachments-container ce-my-message-files-container"
      >
        {renderFiles()}
      </div>

      <Row
        style={{ paddingRight: '2px' }}
        className="ce-message-bubble-row ce-my-message-bubble-row"
      >
        <Col xs={12} sm={12} md={12} style={{ display: 'inline-block' }}>
          <span
            className="ce-message-timestamp ce-my-message-timestamp"
            style={{
              ...styles.timeTag,
              ...{ opacity: hovered ? '1' : '0' },
            }}
          >
            {formatTime(getDateTime(message.created, 0) as Date)}
          </span>

          {message.text !== null && (
            <div
              className={`
                  ce-message-bubble 
                  ce-my-message-bubble 
                  ${isSending && 'ce-my-message-sending-bubble'}
                `}
              style={{
                ...styles.myMessage,
                ...{ borderRadius },
                ...{
                  backgroundColor: isSending ? '#40a9ff' : 'rgb(24, 144, 255)',
                },
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
          )}
        </Col>

        <Col xs={1} sm={2} md={3} />

        <Col xs={12} className="ce-reads-row ce-my-reads-row">
          {renderReads()}
        </Col>
      </Row>
    </div>
  );
};

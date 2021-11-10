import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Dot } from '../../Dot';
import { Avatar } from '../../Avatar';

import { Attachment } from '../Attachment';

import { isImage, getFileName } from '../../util/file';
import { formatTime, getDateTime } from '../../util/dateTime';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const TheirMessage: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  chat = null,
  isSending = false,
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
          style={{ float: 'left', marginLeft: '4px' }}
        />
      );
    });
  };

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

          <div
            style={{ display: 'auto', paddingLeft: '50px' }}
            className="ce-their-message-attachments-container ce-their-message-images-container"
          >
            {renderImages()}
          </div>

          <div
            style={{ display: 'auto', paddingLeft: '50px' }}
            className="ce-their-message-attachments-container ce-their-message-files-container"
          >
            {renderFiles()}
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

        {/* Col is 9 to not slipp into RHS */}
        <Col
          xs={9}
          style={{ marginLeft: '48px' }}
          className="ce-reads-row ce-their-reads-row"
        >
          {renderReads()}
        </Col>
      </Row>
    </div>
  );
};

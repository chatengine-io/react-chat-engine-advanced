import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { isImage, getFileName } from '../util/file';

import { Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

export const MyMessage: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  isSending = false,
}) => {
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
          <img
            src={attachment.file}
            alt={'thumb-nail'}
            style={styles.thumbnail}
            onClick={() => window.open(attachment.file)}
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
          <div
            style={styles.fileView}
            onClick={() => window.open(attachment.file)}
          >
            {getFileName(attachment.file)}
          </div>
        );
      }

      return <div key={`attachment${index}`} />;
    });
  };

  return (
    <div
      className="ce-message-row ce-my-message"
      style={{ width: '100%', textAlign: 'right', paddingBottom }}
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

      <Col xs={12} sm={12} md={12}>
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
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
          >
            <div
              className="ce_message"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
          </div>
        )}
      </Col>
    </div>
  );
};

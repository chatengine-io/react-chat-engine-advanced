import React, { useState } from 'react';

import { MessageProps } from './props';
import { myStyles, theirStyles } from './styles';

import { Dot } from '../../../../Components/Dot';
import { Avatar } from '../../../../Components/Avatar';

import { DateTime } from './DateTime';

import { File } from '../../../../Components/File';
import { Image } from '../../../../Components/Image';

import { isImage, getFileName } from '../../../../util/file';
import { formatTime, getDateTime } from '../../../../util/dateTime';

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const {
    lastMessage = null,
    message,
    nextMessage = null,
    chat = null,
    isSending = false,
    isMyMessage = false,
    showDateTime = false,
  } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const styles = isMyMessage ? myStyles : theirStyles;

  const topRadius =
    !lastMessage || lastMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const bottomRadius =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const borderStyle = {
    borderRadius: isMyMessage
      ? `1.3em ${topRadius} ${bottomRadius} 1.3em`
      : `${topRadius} 1.3em 1.3em ${bottomRadius}`,
  };
  const sendingStyle = isSending ? { backgroundColor: '#40a9ff' } : {};
  const isLastMessage =
    !nextMessage || nextMessage.sender_username !== message.sender_username;

  const paddingBottom =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '12px'
      : '2px';

  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';

  const renderAttachments = (renderImage: boolean) => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (renderImage && isImage(fileName)) {
        return (
          <Image
            key={`attachment_${index}`}
            url={
              attachment.file !== null && !props.isSending
                ? attachment.file
                : undefined
            }
            style={{
              ...styles.attachmentsImageStyle,
              ...props.attachmentsImageStyle,
            }}
            className="ce-message-image"
          />
        );
      } else if (!renderImage && !isImage(fileName)) {
        return (
          <File
            key={`attachment_${index}`}
            url={
              attachment.file !== null && !props.isSending
                ? attachment.file
                : undefined
            }
            style={{
              ...styles.attachmentsFileStyle,
              ...props.attachmentsFileStyle,
            }}
            className="ce-message-file"
          />
        );
      } else {
        return <div key={`attachment_${index}`} />;
      }
    });
  };

  const renderReads = () => {
    const chatPeople = chat !== null ? chat.people : [];
    return chatPeople.map((chatPerson, index) => {
      return (
        <Dot
          key={`read_${index}`}
          avatarUrl={chatPerson.person.avatar}
          username={chatPerson.person.username}
          isVisible={message.id === chatPerson.last_read}
          style={{
            ...styles.readStyle,
            ...props.readStyle,
          }}
        />
      );
    });
  };

  if (props.renderMessage) {
    return <>{props.renderMessage(props)}</>;
  }

  return (
    <div
      className={`ce-${isMyMessage ? 'my' : 'their'}-message`}
      style={{
        ...styles.style,
        ...{ paddingBottom },
        ...props.style,
      }}
    >
      {showDateTime && (
        <DateTime
          created={message.created}
          style={{
            ...styles.dateTimeStyle,
            ...props.dateTimeStyle,
          }}
        />
      )}

      {(lastMessage === null ||
        lastMessage.sender_username !== message.sender_username) && (
        <div
          style={{
            ...styles.senderUsernameStyle,
            ...props.senderUsernameStyle,
          }}
          className={`ce-${
            isMyMessage ? 'my' : 'their'
          }-message-sender-username`}
        >
          {message.sender_username}
        </div>
      )}

      <div
        style={{
          ...styles.attachmentsStyle,
          ...props.attachmentsStyle,
        }}
        className={`
          ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
          ce-${isMyMessage ? 'my' : 'their'}-message-images
        `}
      >
        {renderAttachments(true)}
      </div>

      <div
        style={{
          ...styles.attachmentsStyle,
          ...props.attachmentsStyle,
        }}
        className={`
            ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
            ce-${isMyMessage ? 'my' : 'their'}-message-files
          `}
      >
        {renderAttachments(false)}
      </div>

      {message.text !== null && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...styles.bodyStyle,
            ...props.bodyStyle,
          }}
        >
          {isMyMessage && (
            <span
              className="ce-my-message-timestamp"
              style={{
                ...styles.timeTagStyle,
                ...{ opacity: hovered ? '1' : '0' },
                ...props.timeTagStyle,
              }}
            >
              {formatTime(
                getDateTime(message.created, props.timezoneOffset) as Date
              )}
            </span>
          )}

          <div
            className={`
              ce-${isMyMessage ? 'my' : 'their'}-message-body
              ${isSending && 'ce-my-message-sending-body'}
            `}
            style={{
              ...styles.bubbleStyle,
              ...borderStyle,
              ...sendingStyle,
              ...props.bubbleStyle,
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>

          {!isMyMessage && (
            <span
              className="ce-their-message-timestamp"
              style={{
                ...styles.timeTagStyle,
                ...{ opacity: hovered ? '1' : '0' },
                ...props.timeTagStyle,
              }}
            >
              {formatTime(
                getDateTime(message.created, props.timezoneOffset) as Date
              )}
            </span>
          )}

          <Avatar
            username={message.sender_username}
            style={{
              ...styles.avatarStyle,
              ...(isLastMessage ? {} : { display: 'none' }),
              ...props.avatarStyle,
            }}
            avatarUrl={
              message.sender &&
              message.sender !== null &&
              message.sender.avatar !== null
                ? message.sender.avatar
                : undefined
            }
          />
        </div>
      )}

      <div
        style={{
          ...styles.readsStyle,
          ...props.readsStyle,
        }}
        className={`ce-${isMyMessage ? 'my' : 'their'}-reads-row`}
      >
        {renderReads()}
      </div>
    </div>
  );
};

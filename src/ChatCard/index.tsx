import React from 'react';

import { Props } from './props';
import { styles } from './styles';

export const ChatCard: React.FC<Props> = ({
  isActive = false,
  hasNotification = false,
  title = '',
  description = '',
  timeStamp = '',
  onClick,
  style = {},
}: Props) => {
  const titleWidth = hasNotification ? 'calc(100% - 18px)' : '';

  return (
    <div
      onClick={onClick}
      style={{ ...styles.chatContainer, ...style }}
      className={`ce-chat-card ${isActive && 'ce-active-chat-card'}`}
    >
      <div
        style={styles.titleText}
        className="ce-chat-title-text"
        id={`ce-chat-card-title-${title}`}
      >
        <div
          style={{
            width: titleWidth,
            overflowX: 'hidden',
            display: 'inline-block',
          }}
        >
          {title}
        </div>

        {hasNotification && (
          <div
            className="ce-chat-unread-dot"
            style={{
              marginTop: '5px',
              width: '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: '#1890ff',
              float: 'right',
              display: 'inline-block',
            }}
          />
        )}
      </div>

      <div style={{ width: '100%' }} className="ce-chat-subtitle">
        <div
          style={styles.messageText}
          className="ce-chat-subtitle-text ce-chat-subtitle-message"
        >
          {description}
        </div>

        <div
          className="ce-chat-subtitle-text ce-chat-subtitle-date"
          style={{
            ...styles.messageText,
            ...{ textAlign: 'right', width: '25%' },
          }}
        >
          {timeStamp}
        </div>
      </div>
    </div>
  );
};

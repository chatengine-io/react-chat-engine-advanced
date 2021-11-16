import { useState } from 'react';
import React from 'react';

import { Props } from './props';
import { styles } from './styles';

export const ChatCard: React.FC<Props> = ({
  isActive = false,
  isLoading = false,
  hasNotification = false,
  title = '',
  description = '',
  timeStamp = '',
  onClick,
  style = {},
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const titleWidth = hasNotification ? 'calc(100% - 18px)' : '100%';
  const hoverStyle = hovered && styles.hoveredChat;
  const activeStyle = isActive && styles.activeChat;

  return (
    <div
      onClick={onClick}
      style={{
        ...styles.chatContainer,
        ...hoverStyle,
        ...activeStyle,
        ...style,
      }}
      className={`ce-chat-card ${isActive && 'ce-active-chat-card'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          {!isLoading ? (
            title
          ) : (
            <div
              className="ce-chat-card-loading-bar"
              style={{
                ...styles.loadingBar,
                ...{ width: '99%' },
              }}
            />
          )}
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
          {!isLoading ? (
            <div style={{ height: '19px', overflow: 'hidden' }}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
            </div>
          ) : (
            <div
              className="ce-chat-card-loading-bar"
              style={{
                ...styles.loadingBar,
                ...{ width: '60%' },
              }}
            />
          )}
        </div>

        <div
          className="ce-chat-subtitle-text ce-chat-subtitle-date"
          style={{
            ...styles.messageText,
            ...{ textAlign: 'right', width: '25%' },
          }}
        >
          {!isLoading ? (
            timeStamp
          ) : (
            <div
              className="ce-chat-card-loading-bar"
              style={{
                ...styles.loadingBar,
                ...{
                  width: 'calc(100% - 5px)',
                  position: 'relative',
                  right: '5px',
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

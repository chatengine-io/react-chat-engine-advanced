import React, { useState } from 'react';

import { Properties } from 'csstype';

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
  chatCardStyle = {},
  hoveredChatCardStyle = {},
  activeChatCardStyle = {},
  chatCardTitleStyle = {},
  chatCardNotificationStyle = {},
  chatCardSubtitleStyle = {},
  chatCardTimeStampStyle = {},
  chatCardLoadingBarStyle = {},
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const loadingBarStyle: Properties = isLoading
    ? { ...styles.chatCardLoadingBarStyle, ...chatCardLoadingBarStyle }
    : {};
  const hasNotificationStyle: Properties = hasNotification
    ? {}
    : { display: 'none' };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Default
        ...styles.chatCardStyle,
        // State
        ...(hovered ? styles.hoveredChatCardStyle : {}),
        ...(isActive ? styles.activeChatCardStyle : {}),
        // Props
        ...chatCardStyle,
        // Props + State
        ...(hovered ? hoveredChatCardStyle : {}),
        ...(isActive ? activeChatCardStyle : {}),
      }}
      className={`
        ce-chat-card 
        ${isActive && 'ce-active-chat-card'} 
        ${hovered && 'ce-hovered-chat-card'}
      `}
    >
      <div
        className="ce-chat-card-title"
        style={{
          ...styles.chatCardTitleStyle,
          ...loadingBarStyle,
          ...chatCardTitleStyle,
        }}
        id={`ce-chat-card-title-${title}`}
      >
        {isLoading ? '.' : title}
      </div>

      <div
        className="ce-chat-card-unread"
        style={{
          ...styles.chatCardNotificationStyle,
          ...hasNotificationStyle,
          ...loadingBarStyle,
          ...chatCardNotificationStyle,
        }}
      />

      <div
        className="ce-chat-card-subtitle"
        style={{
          ...styles.chatCardSubtitleStyle,
          ...loadingBarStyle,
          ...chatCardSubtitleStyle,
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: isLoading ? '.' : description,
          }}
        />
        <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
      </div>

      <div
        className="ce-chat-card-time-stamp"
        style={{
          ...styles.chatCardTimeStampStyle,
          ...loadingBarStyle,
          ...chatCardTimeStampStyle,
        }}
      >
        {isLoading ? '.' : timeStamp}
      </div>
    </div>
  );
};

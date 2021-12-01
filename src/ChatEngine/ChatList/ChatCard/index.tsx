import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const ChatCard: React.FC<Props> = (props: Props) => {
  const { title = '', description = '', timeStamp = '' } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const loadingBarStyle: React.CSSProperties = props.isLoading
    ? { ...styles.chatCardLoadingBarStyle, ...props.chatCardLoadingBarStyle }
    : {};

  const hasNotificationStyle: React.CSSProperties = props.hasNotification
    ? {}
    : { display: 'none' };

  if (props.renderChatCard) {
    return <>{props.renderChatCard(props)}</>;
  }

  return (
    <div
      onClick={props.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Default
        ...styles.chatCardStyle,
        // State
        ...(hovered ? styles.hoveredChatCardStyle : {}),
        ...(props.isActive ? styles.activeChatCardStyle : {}),
        // Props
        ...props.chatCardStyle,
        // Props + State
        ...(hovered ? props.hoveredChatCardStyle : {}),
        ...(props.isActive ? props.activeChatCardStyle : {}),
      }}
      className={`
        ce-chat-card 
        ${props.isActive && 'ce-active-chat-card'} 
        ${hovered && 'ce-hovered-chat-card'}
      `}
    >
      <div
        className="ce-chat-card-title"
        style={{
          ...styles.chatCardTitleStyle,
          ...loadingBarStyle,
          ...props.chatCardTitleStyle,
        }}
        id={`ce-chat-card-title-${title}`}
      >
        {props.isLoading ? '.' : title}
      </div>

      <div
        className="ce-chat-card-unread"
        style={{
          ...styles.chatCardNotificationStyle,
          ...hasNotificationStyle,
          ...loadingBarStyle,
          ...props.chatCardNotificationStyle,
        }}
      />

      <div
        className="ce-chat-card-subtitle"
        style={{
          ...styles.chatCardSubtitleStyle,
          ...loadingBarStyle,
          ...props.chatCardSubtitleStyle,
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: props.isLoading ? '.' : description,
          }}
        />
        <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
      </div>

      <div
        className="ce-chat-card-time-stamp"
        style={{
          ...styles.chatCardTimeStampStyle,
          ...loadingBarStyle,
          ...props.chatCardTimeStampStyle,
        }}
      >
        {props.isLoading ? '.' : timeStamp}
      </div>
    </div>
  );
};

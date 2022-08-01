import React, { useState } from 'react';

import { Avatar } from '../../../Components/Avatar';

import { stringToColor } from '../../../util/colorMapping';

import { ChatCardProps } from './props';
import { styles } from './styles';

export const ChatCard: React.FC<ChatCardProps> = (props: ChatCardProps) => {
  const { title = '', description = '', timeStamp = '' } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const loadingBarStyle: React.CSSProperties = props.isLoading
    ? { ...styles.loadingBarStyle, ...props.loadingBarStyle }
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
        ...styles.style,
        // State
        ...(hovered ? styles.hoveredStyle : {}),
        ...(props.isActive ? styles.activeStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(hovered ? props.hoveredStyle : {}),
        ...(props.isActive ? props.activeStyle : {}),
      }}
      className={`
        ce-chat-card 
        ${props.isActive && 'ce-active-chat-card'} 
        ${hovered && 'ce-hovered-chat-card'}
      `}
    >
      {props.renderAvatar ? (
        props.renderAvatar(props)
      ) : (
        <Avatar
          username={props.avatarUsername}
          avatarUrl={props.avatarUrl}
          className="ce-chat-card-avatar"
          style={{
            ...styles.avatarStyle,
            ...{
              backgroundColor: props.isLoading
                ? '#e2e2e2'
                : stringToColor(props.avatarUsername),
            },
            ...props.avatarStyle,
          }}
        />
      )}

      <div
        className={`ce-chat-card-title ${
          props.isLoading && 'ce-chat-card-title-loading ce-chat-card-loading'
        }`}
        style={{
          ...styles.titleStyle,
          ...loadingBarStyle,
          ...props.titleStyle,
        }}
        id={`ce-chat-card-title-${title}`}
      >
        {props.isLoading ? '.' : title}
      </div>

      <div
        className={`ce-chat-card-unread ${
          props.isLoading && 'ce-chat-card-unread-loading ce-chat-card-loading'
        }`}
        style={{
          ...styles.notificationStyle,
          ...hasNotificationStyle,
          ...loadingBarStyle,
          ...props.notificationStyle,
        }}
      />

      <div
        className={`ce-chat-card-subtitle ${
          props.isLoading &&
          'ce-chat-card-subtitle-loading ce-chat-card-loading'
        }`}
        style={{
          ...styles.subtitleStyle,
          ...loadingBarStyle,
          ...props.subtitleStyle,
        }}
      >
        <div
          className={`ce-chat-card-subtitle-html ${
            props.isLoading &&
            'ce-chat-card-subtitle-html-loading ce-chat-card-loading'
          }`}
          dangerouslySetInnerHTML={{
            __html: props.isLoading ? '.' : description,
          }}
        />
        <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
      </div>

      <div
        className={`ce-chat-card-time-stamp ${
          props.isLoading &&
          'ce-chat-card-time-stamp-loading ce-chat-card-loading'
        }`}
        style={{
          ...styles.timeStampStyle,
          ...loadingBarStyle,
          ...props.timeStampStyle,
        }}
      >
        {props.isLoading ? '.' : timeStamp}
      </div>
    </div>
  );
};

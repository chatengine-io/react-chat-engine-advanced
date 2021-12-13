import React from 'react';

import { stringToColor } from '../../util/colorMapping';

import { Props } from './props';

import { styles } from './styles';

export const Avatar = (props: Props) => {
  const { username = '', avatarUrl } = props;

  const text = username ? username.substring(0, 2).toUpperCase() : '';
  const color = stringToColor(username);

  const isString = (avatarUrl: string | null | undefined) => {
    return typeof avatarUrl === 'string';
  };

  const avatarUrlStyle = {
    backgroundColor: isString(avatarUrl) ? '#FFFFFF' : color,
    backgroundImage: isString(avatarUrl) && `url(${avatarUrl})`,
    // height: `${isString(avatarUrl) ? '44px' : 'auto'}`,
    padding: `${isString(avatarUrl) ? '0px' : 'auto'}`,
  } as React.CSSProperties;

  return (
    <div
      className="ce-avatar"
      onClick={props.onClick}
      style={{
        ...styles.style,
        ...avatarUrlStyle,
        ...props.style,
      }}
    >
      {!avatarUrl && text}

      <div
        className="ce-avatar-status"
        style={{
          ...styles.statusStyle,
          ...{
            display: props.isOnline === undefined ? 'none' : 'auto',
            backgroundColor: props.isOnline ? '#52c41a' : '#f5222d',
          },
          ...props.statusStyle,
        }}
      />
    </div>
  );
};

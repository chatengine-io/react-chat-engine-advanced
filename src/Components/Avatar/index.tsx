import React from 'react';
import { Properties } from 'csstype';

import { stringToColor } from '../../util/colorMapping';

import { Props } from './props';

import { styles } from './styles';

export const Avatar = ({
  username = '',
  avatarUrl,
  isOnline,
  style = {},
  statusStyle = {},
  onClick = () => {},
}: Props) => {
  const text = username ? username.substring(0, 2).toUpperCase() : '';
  const color = stringToColor(username);

  const isString = (avatarUrl: string | null | undefined) => {
    return typeof avatarUrl === 'string';
  };

  const avatarUrlStyle = {
    backgroundColor: isString(avatarUrl) ? '#FFFFFF' : color,
    backgroundImage: isString(avatarUrl) && `url(${avatarUrl})`,
    height: `${isString(avatarUrl) ? '44px' : 'auto'}`,
    padding: `${isString(avatarUrl) ? '0px' : 'auto'}`,
  } as Properties;

  return (
    <div
      className="ce-avatar"
      onClick={onClick}
      style={{
        ...styles.style,
        ...avatarUrlStyle,
        ...style,
      }}
    >
      {!avatarUrl && text}

      {isOnline !== undefined && (
        <div
          className="ce-avatar-status"
          style={{
            ...styles.statusStyle,
            ...{ backgroundColor: isOnline ? '#52c41a' : '#f5222d' },
            ...statusStyle,
          }}
        />
      )}
    </div>
  );
};

import React from 'react';
import { Properties } from 'csstype';

import { stringToColor } from '../../util/colorMapping';

import { Props } from './props';

import { styles } from './styles';

export const Avatar = ({
  username = '',
  avatarUrl = undefined,
  isOnline,
  style = {},
  statusStyle = {},
  onClick = () => {},
}: Props) => {
  const text = username ? username.substring(0, 2).toUpperCase() : '';
  const color = stringToColor(username);

  const avatarUrlStyle = {
    backgroundColor: avatarUrl ? '#FFFFFF' : color,
    backgroundImage: avatarUrl && `url(${avatarUrl})`,
    height: `${avatarUrl ? '44px' : 'auto'}`,
    padding: `${avatarUrl ? '0px' : 'auto'}`,
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

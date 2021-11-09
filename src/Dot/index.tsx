import React from 'react';
import { stringToColor } from '../util/colorMapping';
import { Props } from './props';
import { styles } from './styles';

export const Dot = ({
  avatarUrl = undefined,
  username = '',
  style = {},
  visible = true,
}: Props) => {
  const color = stringToColor(username);

  return (
    <div
      className="ce-avatar-dot"
      style={{
        ...styles.default,
        ...{
          backgroundColor: avatarUrl ? 'white' : color,
          backgroundImage: avatarUrl ? `url(${avatarUrl})` : '',
          width: visible ? '13px' : '0px',
          height: visible ? '13px' : '0px',
        },
        ...style,
      }}
    />
  );
};

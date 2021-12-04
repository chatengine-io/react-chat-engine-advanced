import React from 'react';
import { stringToColor } from '../../util/colorMapping';
import { Props } from './props';
import { styles } from './styles';

export const Dot = (props: Props) => {
  const { username = '', isVisible = true } = props;

  const color = stringToColor(username);

  return (
    <div
      className="ce-avatar-dot"
      style={{
        ...styles.style,
        ...{
          backgroundColor: props.avatarUrl ? 'white' : color,
          backgroundImage: props.avatarUrl ? `url(${props.avatarUrl})` : '',
          width: isVisible ? '13px' : '0px',
          height: isVisible ? '13px' : '0px',
        },
        ...props.style,
      }}
    />
  );
};

import React, { useEffect, useState } from 'react';

import { stringToColor } from '../../util/colorMapping';

import { Props } from './props';

import { styles } from './styles';

export const Avatar = (props: Props) => {
  // Save Copy of URL to avoid flickering
  const [localAvatar, setLocalAvatar] = useState<string>('');
  const { username = '', avatarUrl = '' } = props;

  const text = username ? username.substring(0, 2).toUpperCase() : '';
  const color = stringToColor(username);

  useEffect(() => {
    const newAvatar = avatarUrl !== null ? avatarUrl : '';
    if (newAvatar.split('?')[0] !== localAvatar.split('?')[0]) {
      setLocalAvatar(newAvatar);
    }
  });

  const avatarUrlStyle = {
    backgroundColor: localAvatar.length > 0 ? '#FFFFFF' : color,
    backgroundImage: localAvatar.length > 0 && `url(${localAvatar})`,
  } as React.CSSProperties;

  return (
    <div
      className={`ce-avatar ${props.className}`}
      onClick={props.onClick}
      style={{
        ...styles.style,
        ...avatarUrlStyle,
        ...props.style,
      }}
    >
      {localAvatar.length === 0 && text}

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

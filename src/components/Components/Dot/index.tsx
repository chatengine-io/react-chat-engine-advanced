import React, { useEffect, useState } from 'react';
import { stringToColor } from '../../util/colorMapping';
import { Props } from './props';
import { styles } from './styles';

export const Dot = (props: Props) => {
  const [localAvatar, setLocalAvatar] = useState<string>('');
  const { username = '', isVisible = true, avatarUrl = '' } = props;

  const color = stringToColor(username);

  useEffect(() => {
    const newAvatar = avatarUrl !== null ? avatarUrl : '';
    if (newAvatar.split('?')[0] !== localAvatar.split('?')[0]) {
      setLocalAvatar(newAvatar);
    }
  });

  return (
    <div
      className="ce-avatar-dot"
      style={{
        ...styles.style,
        ...{
          backgroundColor: localAvatar.length > 0 ? 'white' : color,
          backgroundImage: localAvatar.length > 0 ? `url(${localAvatar})` : '',
          width: isVisible ? '13px' : '0px',
          height: isVisible ? '13px' : '0px',
        },
        ...props.style,
      }}
    />
  );
};

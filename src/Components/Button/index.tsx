import React, { useState } from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

export const Button = ({
  children = undefined,
  type = 'default',
  customStyle = {},
  icon = undefined,
  onClick = () => {},
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const getTypeStyle = () => {
    if (type == 'primary') {
      return { ...styles.primaryButton, ...customStyle.primaryButton };
    } else if (type === 'danger') {
      return { ...styles.dangerButton, ...customStyle.dangerButton };
    } else {
      return {} as Properties;
    }
  };

  const typeStyle = getTypeStyle();
  const hoverStyle = hovered ? styles.hoverButton : {};

  return (
    <button
      onClick={onClick}
      className={`ce-${type}-button`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.defaultButton,
        ...typeStyle,
        ...hoverStyle,
        ...customStyle.defaultButton,
      }}
    >
      {icon}
      {icon && ' '}
      {children}
    </button>
  );
};

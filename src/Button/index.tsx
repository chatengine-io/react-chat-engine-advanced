import React, { useState } from 'react';

import { Props } from './Button.props';
import { styles } from './Button.styles';

export const Button = ({
  children = undefined,
  type = 'default',
  style = {},
  icon = undefined,
  onClick = () => {},
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  let typeStyle = {};
  switch (type) {
    case 'primary':
      typeStyle = styles.primaryButton;
      break;
    case 'danger':
      typeStyle = styles.dangerButton;
      break;
  }

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
        ...style,
      }}
    >
      {icon}
      {icon && ' '}
      {children}
    </button>
  );
};

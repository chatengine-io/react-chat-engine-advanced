import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Button = (props: Props) => {
  const { type = 'default' } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const getTypeStyle = () => {
    if (type == 'primary') {
      return primaryStyle;
    } else if (type === 'danger') {
      return dangerStyle;
    } else {
      return {} as React.CSSProperties;
    }
  };

  const typeStyle = getTypeStyle();

  return (
    <button
      onClick={props.onClick}
      className={`ce-${type}-button ${props.className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Default
        ...styles.style,
        ...typeStyle,
        // State
        ...(hovered ? styles.hoveredStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(hovered ? props.hoveredStyle : {}),
      }}
    >
      {props.children}
    </button>
  );
};

const primaryStyle = {
  color: 'white',
  border: 'none',
  backgroundColor: '#1890ff',
} as React.CSSProperties;

const dangerStyle = {
  color: '#f5222d',
  backgroundColor: 'white',
  border: '1px solid #f5222d',
} as React.CSSProperties;

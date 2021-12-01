import React, { useState } from 'react';

import { Props } from './props';

export const Button = ({
  children = undefined,
  type = 'default',
  onClick = () => {},
  style = {},
}: Props) => {
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
  const hoverStyle = hovered ? { opacity: '0.73' } : {};

  return (
    <button
      onClick={onClick}
      className={`ce-${type}-button`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Default
        ...defaultStyle,
        ...typeStyle,
        // State
        ...hoverStyle,
        // Props
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const defaultStyle = {
  fontFamily: 'Avenir',
  color: '#1890ff',
  border: '1px solid #1890ff',
  outline: 'none',
  height: '36px',
  fontSize: '15px',
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '33px',
  backgroundColor: 'white',
  transition: 'all .44s ease',
  WebkitTransition: 'all .44s ease',
  MozTransition: 'all .44s ease',
} as React.CSSProperties;

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

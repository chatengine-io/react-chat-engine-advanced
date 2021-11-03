import React, { HTMLAttributes, ReactNode, useState } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'primary' | 'default' | 'danger';
  style?: CSS.Properties;
  icon?: ReactNode;
  onClick?: () => void;
}

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

const styles = {
  defaultButton: {
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
  },
  primaryButton: {
    color: 'white',
    border: 'none',
    backgroundColor: '#1890ff',
  },
  dangerButton: {
    color: '#f5222d',
    backgroundColor: 'white',
    border: '1px solid #f5222d',
  },
  hoverButton: {
    opacity: '0.73',
  },
};

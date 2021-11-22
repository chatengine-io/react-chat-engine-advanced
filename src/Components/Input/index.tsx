import React, { useState, useRef, useEffect } from 'react';
import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

export const Input = ({
  autoFocus = false,
  label = '',
  defaultValue,
  value,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  style = {},
  focusStyle = {},
}: Props) => {
  const didMountRef = useRef<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      if (defaultValue) {
        const event = {
          target: { value: currentValue },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange && onChange(event);
        setCurrentValue(defaultValue);
      }
    }
  });

  return (
    <input
      autoFocus={autoFocus}
      value={typeof value === 'string' ? value : currentValue}
      onChange={(e) => {
        setCurrentValue(e.target.value);
        onChange && onChange(e);
      }}
      className="ce-input ce-text-input"
      placeholder={label}
      onFocus={(e) => {
        setFocused(true);
        onFocus && onFocus(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        onBlur && onBlur(e);
      }}
      style={{
        // Default
        ...defaultStyle,
        // State
        ...(focused ? styles.focusStyle : {}),
        // Props
        ...style,
        // Props + State
        ...(focused ? focusStyle : {}),
      }}
    />
  );
};

const defaultStyle = {
  fontFamily: 'Avenir',
  height: '36px',
  fontSize: '15px',
  outline: 'none',
  borderRadius: '24px',
  border: '1px solid #d9d9d9',
  padding: '0px 12px',
  boxSizing: 'border-box',
  transition: 'all .33s ease',
  WebkitTransition: 'all .33s ease',
  MozTransition: 'all .33s ease',
} as Properties;

import React, { useState, useRef, useEffect } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Input = ({
  autoFocus = false,
  label = '',
  style = {},
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  defaultValue,
  value,
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

  const focuseStyle = focused && styles.focusInput;

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
        ...styles.input,
        ...focuseStyle,
        ...style,
      }}
    />
  );
};

import React, { useState, useRef, useEffect } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Input = (props: Props) => {
  const didMountRef = useRef<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (props.defaultValue) {
        const event = {
          target: { value: currentValue },
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange && props.onChange(event);
        setCurrentValue(props.defaultValue);
      }
    }
  });

  return (
    <input
      autoFocus={props.autoFocus}
      className={`ce-input ce-text-input ${props.className}`}
      placeholder={props.label}
      value={typeof props.value === 'string' ? props.value : currentValue}
      onChange={(e) => {
        setCurrentValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      onFocus={(e) => {
        setFocused(true);
        props.onFocus && props.onFocus(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        props.onBlur && props.onBlur(e);
      }}
      style={{
        ...styles.style,
        ...(focused ? styles.focusStyle : {}),
        ...props.style,
        ...(focused ? props.focusStyle : {}),
      }}
    />
  );
};

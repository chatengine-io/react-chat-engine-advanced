import React, { HTMLAttributes, useState, useRef, useEffect } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string | undefined;
  style?: CSS.Properties;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({
  label = '',
  style = {},
  onChange,
  onFocus,
  onBlur,
  defaultValue = undefined,
}: Props) => {
  const didMountRef = useRef<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      if (defaultValue) {
        const event = {
          target: { value },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange && onChange(event);
        setValue(defaultValue);
      }
    }
  });

  const focuseStyle = focused && styles.focusInput;

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange;
      }}
      className="ce-input ce-text-input"
      placeholder={label}
      onFocus={() => {
        setFocused(true);
        onFocus;
      }}
      onBlur={() => {
        setFocused(false);
        onBlur;
      }}
      style={{
        ...styles.input,
        ...focuseStyle,
        ...style,
      }}
    />
  );
};

const styles = {
  input: {
    height: '36px',
    fontSize: '15px',
    outline: 'none',
    borderRadius: '24px',
    border: '1px solid #d9d9d9',
    padding: '0px 12px',
    // boxSizing: 'border-box',
  },
  focusInput: {
    border: '1px solid #1890ff',
  },
};

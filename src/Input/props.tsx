import React, { HTMLAttributes } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean;
  label?: string;
  defaultValue?: string | undefined;
  style?: CSS.Properties;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

import React, { HTMLAttributes } from 'react';

import { InputStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean;
  label?: string;
  defaultValue?: string | undefined;
  value?: string | undefined;
  customStyle?: InputStyles;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

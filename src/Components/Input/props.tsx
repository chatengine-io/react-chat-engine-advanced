import React, { HTMLAttributes } from 'react';

import { InputStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLInputElement>, InputStyles {
  autoFocus?: boolean;
  label?: string;
  defaultValue?: string | undefined;
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

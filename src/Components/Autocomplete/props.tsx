import React, { HTMLAttributes, ReactNode } from 'react';

import { AutocompleteStyles } from './styles';

export interface Props
  extends HTMLAttributes<HTMLInputElement>,
    AutocompleteStyles {
  options: Array<Object>;
  label?: string;
  maxVisibleOptions?: number;
  // Hooks
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  // Render Functions
  renderOption: (option: Object) => ReactNode;
}

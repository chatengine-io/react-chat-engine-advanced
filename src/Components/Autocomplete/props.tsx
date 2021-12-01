import { HTMLAttributes, ReactNode } from 'react';

import { AutocompleteStyles } from './styles';

export interface Props
  extends HTMLAttributes<HTMLInputElement>,
    AutocompleteStyles {
  options: Array<Object>;
  label?: string;
  // State
  maxVisibleOptions?: number;
  // Render Functions
  renderOption: (option: Object) => ReactNode;
}

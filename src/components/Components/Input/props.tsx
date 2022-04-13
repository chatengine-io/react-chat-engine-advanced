import { HTMLAttributes } from 'react';

import { InputStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLInputElement>, InputStyles {
  label?: string;
  defaultValue?: string | undefined;
  value?: string | undefined;
  autoFocus?: boolean;
  className?: string;
}

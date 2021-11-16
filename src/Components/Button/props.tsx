import { HTMLAttributes, ReactNode } from 'react';

import { ButtonStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'primary' | 'default' | 'danger';
  customStyle?: ButtonStyles;
  icon?: ReactNode;
  onClick?: () => void;
}

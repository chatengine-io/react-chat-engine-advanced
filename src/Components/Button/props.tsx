import { HTMLAttributes, ReactNode } from 'react';

import { ButtonStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLButtonElement>, ButtonStyles {
  children?: ReactNode;
  type?: 'primary' | 'default' | 'danger';
  onClick?: () => void;
}

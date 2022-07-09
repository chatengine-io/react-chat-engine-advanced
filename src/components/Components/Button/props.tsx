import { HTMLAttributes, ReactNode } from 'react';

import { ButtonStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLButtonElement>, ButtonStyles {
  children?: ReactNode;
  className?: string;
  type?: 'primary' | 'default' | 'danger';
  onClick?: () => void;
}

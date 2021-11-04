import { HTMLAttributes, ReactNode } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'primary' | 'default' | 'danger';
  style?: CSS.Properties;
  icon?: ReactNode;
  onClick?: () => void;
}

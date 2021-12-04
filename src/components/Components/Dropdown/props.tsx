import { ReactNode } from 'react';
import { DropdownStyles } from './styles';

export interface Props extends DropdownStyles {
  id?: string;
  className?: string;
  label?: string;
  children?: ReactNode;
}

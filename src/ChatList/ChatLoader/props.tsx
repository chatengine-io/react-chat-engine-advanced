import { Properties } from 'csstype';
import { ReactNode } from 'react';
export interface Props {
  onVisible?: () => void;
  style?: Properties;
  children?: ReactNode;
}

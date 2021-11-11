import { Properties } from 'csstype';
import { ReactNode } from 'react';
export interface Props {
  style?: Properties;
  children?: ReactNode;
  onShow?: () => void;
  onHide?: () => void;
}

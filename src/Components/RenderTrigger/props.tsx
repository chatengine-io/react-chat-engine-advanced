import { ReactNode } from 'react';

import { RenderTriggerStyles } from './styles';
export interface Props {
  children?: ReactNode;
  onShow?: () => void;
  onHide?: () => void;
  customStyle?: RenderTriggerStyles;
}

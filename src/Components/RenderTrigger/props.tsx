import { ReactNode } from 'react';

import { RenderTriggerStyles } from './styles';

export interface Props extends RenderTriggerStyles {
  children?: ReactNode;
  onShow?: () => void;
  onHide?: () => void;
}

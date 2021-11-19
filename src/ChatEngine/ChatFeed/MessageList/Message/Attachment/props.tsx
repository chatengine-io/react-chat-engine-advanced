import { ReactNode } from 'react';

import { AttachmentStyle } from './styles';

import { AttachmentProps } from '../../../../../util/interfaces';

export interface Props {
  attachment: AttachmentProps;
  isLoading?: boolean;
  children?: ReactNode;
  customStyle?: AttachmentStyle;
}

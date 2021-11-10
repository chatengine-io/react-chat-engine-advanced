import { ReactNode } from 'react';

import { Properties } from 'csstype';

import { AttachmentProps } from '../../../util/interfaces';

export interface Props {
  attachment: AttachmentProps;
  isLoading?: boolean;
  children?: ReactNode;
  style?: Properties;
  loadingStyle?: Properties;
}

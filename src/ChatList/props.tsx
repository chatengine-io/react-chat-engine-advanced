import { HTMLAttributes } from 'react';

import { Properties } from 'csstype';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: Properties;
  loading?: boolean;
}

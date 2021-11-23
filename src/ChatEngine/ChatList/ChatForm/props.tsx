import { HTMLAttributes } from 'react';

import { ChatFormStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLFormElement>, ChatFormStyles {
  onFormSubmit?: (value: string) => void;
}

import { HTMLAttributes } from 'react';

import { ChatFormStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLFormElement> {
  onFormSubmit?: (value: string) => void;
  customStyle?: ChatFormStyles;
}

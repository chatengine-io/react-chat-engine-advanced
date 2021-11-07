import { HTMLAttributes } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLFormElement> {
  style?: CSS.Properties;
  titleStyle?: CSS.Properties;
  inputStyle?: CSS.Properties;
  buttonStyle?: CSS.Properties;
  onFormSubmit?: (value: string) => void;
}

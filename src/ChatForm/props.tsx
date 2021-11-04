import { HTMLAttributes } from 'react';
import CSS from 'csstype';

export interface Props extends HTMLAttributes<HTMLFormElement> {
  style?: CSS.Properties;
}
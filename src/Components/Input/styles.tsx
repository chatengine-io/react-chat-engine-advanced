import { Properties } from 'csstype';

export interface InputStyles {
  focusStyle?: Properties;
}

export const styles: InputStyles = {
  focusStyle: {
    border: '1px solid #1890ff',
  } as Properties,
};

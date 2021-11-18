import { Properties } from 'csstype';

export interface InputStyles {
  input?: Properties;
  focusInput?: Properties;
}

export const styles: InputStyles = {
  input: {
    fontFamily: 'Avenir',
    height: '36px',
    fontSize: '15px',
    outline: 'none',
    borderRadius: '24px',
    border: '1px solid #d9d9d9',
    padding: '0px 12px',
    boxSizing: 'border-box',
  } as Properties,
  focusInput: {
    border: '1px solid #1890ff',
  } as Properties,
};

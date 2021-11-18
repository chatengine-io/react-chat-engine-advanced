import { Properties } from 'csstype';

export interface ButtonStyles {
  defaultButton?: Properties;
  primaryButton?: Properties;
  dangerButton?: Properties;
  hoverButton?: Properties;
}

export const styles: ButtonStyles = {
  defaultButton: {
    fontFamily: 'Avenir',
    color: '#1890ff',
    border: '1px solid #1890ff',
    outline: 'none',
    height: '36px',
    fontSize: '15px',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '33px',
    backgroundColor: 'white',
    transition: 'all .44s ease',
    WebkitTransition: 'all .44s ease',
    MozTransition: 'all .44s ease',
  } as Properties,
  primaryButton: {
    color: 'white',
    border: 'none',
    backgroundColor: '#1890ff',
  } as Properties,
  dangerButton: {
    color: '#f5222d',
    backgroundColor: 'white',
    border: '1px solid #f5222d',
  } as Properties,
  hoverButton: {
    opacity: '0.73',
  } as Properties,
};

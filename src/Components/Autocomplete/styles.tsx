import { Properties } from 'csstype';

export interface AutocompleteStyles {
  inputStyle?: Properties;
  optionStyle?: Properties;
}

export const styles: AutocompleteStyles = {
  inputStyle: {
    width: '100%',
    height: '36px',
    padding: '0px 12px',
    boxSizing: 'border-box',
    fontSize: '15px',
    fontFamily: 'Avenir',
    outline: 'none',
    borderRadius: '24px',
  },
  optionStyle: { overflow: 'hidden' },
};

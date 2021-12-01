export interface AutocompleteStyles {
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  closeStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
}

export const styles: AutocompleteStyles = {
  style: { position: 'relative' },
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
  closeStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '5px',
    right: '12px',
  },
  optionsStyle: { overflow: 'hidden' },
};

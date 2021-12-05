export interface InputStyles {
  style?: React.CSSProperties;
  focusStyle?: React.CSSProperties;
}

export const styles: InputStyles = {
  style: {
    fontFamily: 'Avenir',
    height: '36px',
    fontSize: '15px',
    outline: 'none',
    borderRadius: '24px',
    border: '1px solid #d9d9d9',
    padding: '0px 12px',
    boxSizing: 'border-box',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  },
  focusStyle: {
    border: '1px solid #1890ff',
  },
};

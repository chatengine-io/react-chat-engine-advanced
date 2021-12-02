export interface ButtonStyles {
  style?: React.CSSProperties;
  hoveredStyle?: React.CSSProperties;
}

export const styles: ButtonStyles = {
  style: {
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
  },
  hoveredStyle: { opacity: '0.73' },
};

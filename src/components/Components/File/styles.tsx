export interface FileStyles {
  style?: React.CSSProperties;
  hoveredStyle?: React.CSSProperties;
}

export const styles: FileStyles = {
  style: {
    cursor: 'pointer',
    fontFamily: 'Avenir',
    padding: '12px',
    borderRadius: '14px',
    display: 'inline-block',
    marginRight: '2px',
    marginBottom: '4px',
    color: '#434343',
    backgroundColor: 'white',
    border: '1px solid #434343',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  },
  hoveredStyle: { border: '1px solid #1890ff' },
};

export interface DropdownStyles {
  style?: React.CSSProperties;
  barStyle?: React.CSSProperties;
  barHoveredStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  bodyExpandedStyle?: React.CSSProperties;
}

export const styles: DropdownStyles = {
  style: { borderTop: '1px solid #f0f0f0' },
  barStyle: {
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
    fontFamily: 'Avenir',
    fontSize: '17px',
    padding: '12px',
    fontWeight: 600,
  },
  barHoveredStyle: {
    backgroundColor: '#f0f0f0',
  },
  iconStyle: {
    position: 'absolute',
    right: '12px',
    bottom: '15px',
    width: '1em',
    height: '1em',
    transition: `transform 100ms`,
  },
  bodyStyle: {
    height: '0px',
    overflow: 'hidden',
    transition: 'all 1.33s ease',
    WebkitTransition: 'all 1.33s ease',
    MozTransition: 'all 1.33s ease',
  },
  bodyExpandedStyle: { height: 'auto' },
};

import { Properties } from 'csstype';

export interface DropdownStyles {
  style?: Properties;
  barStyle?: Properties;
  hoveredStyle?: Properties;
  iconStyle?: Properties;
  bodyStyle?: Properties;
  selectedStyle?: Properties;
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
  hoveredStyle: {
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
  selectedStyle: { height: 'auto' },
};

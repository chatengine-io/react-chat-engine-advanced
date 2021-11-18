import { Properties } from 'csstype';

export interface FileStyles {
  style?: Properties;
  hoveredStyle?: Properties;
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
    border: '1px solid #434343',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  hoveredStyle: { border: '1px solid #1890ff' } as Properties,
};

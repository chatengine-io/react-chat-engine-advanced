import { Properties } from 'csstype';

export interface ImageStyles {
  style?: Properties;
  hoveredStyle?: Properties;
}

export const styles: ImageStyles = {
  style: {
    cursor: 'pointer',
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
    padding: '2px',
    objectFit: 'cover',
    borderRadius: '0.3em',
    border: '1px solid #434343',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  hoveredStyle: { border: '1px solid #1890ff' } as Properties,
};

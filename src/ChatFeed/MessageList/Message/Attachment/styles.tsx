import { Properties } from 'csstype';

export interface AttachmentStyle {
  thumb: Properties;
  loading: Properties;
  hovered: Properties;
  notHovered: Properties;
}

const imageBaseStyles = {
  cursor: 'pointer',
  height: '30vw',
  width: '30vw',
  maxHeight: '200px',
  maxWidth: '200px',
  minHeight: '100px',
  minWidth: '100px',
  padding: '2px',
  textAlign: 'right',
  objectFit: 'cover',
  borderRadius: '0.3em',
};

export const imageStyles: AttachmentStyle = {
  thumb: {
    ...imageBaseStyles,
    display: 'inline',    
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  loading: {
    ...imageBaseStyles,
    fontFamily: 'Avenir',
    color: 'white',
    display: 'inline-block',
    marginRight: '2px',
    marginBottom: '4px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  hovered: {
    border: '1px solid #1890ff',
  } as Properties,
  notHovered: {
    border: '1px solid #fff',
  } as Properties
}

const fileBaseStlyes = {
  fontFamily: 'Avenir',
  padding: '12px',
  borderRadius: '14px',
  display: 'inline-block',
  marginRight: '2px',
  marginBottom: '4px',
}

export const fileStyles: AttachmentStyle = {
  thumb: {
    ...fileBaseStlyes,
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  loading: {
    ...fileBaseStlyes,
    color: 'white',
    width: '136px',
    marginLeft: '4px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  hovered: {
    color: '#1890ff',
    border: '1px solid #1890ff',
  } as Properties,
  notHovered: {
    color: '#434343',
    border: '1px solid #434343',
  } as Properties
}
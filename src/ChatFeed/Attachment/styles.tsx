import { Properties } from 'csstype';

export interface AttachmentStyle {
  thumb: Properties;
  loading: Properties;
  hovered: Properties;
  notHovered: Properties;
}

export const imageStyles: AttachmentStyle = {
  thumb: {
    cursor: 'pointer',
    textAlign: 'right',
    display: 'inline',
    objectFit: 'cover',
    borderRadius: '0.3em',
    padding: '2px',
    // Size
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  loading: {
    fontFamily: 'Avenir',
    color: 'white',
    cursor: 'pointer',
    textAlign: 'right',
    display: 'inline-block',
    objectFit: 'cover',
    borderRadius: '0.3em',
    padding: '2px',
    marginRight: '2px',
    marginBottom: '4px',
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  hovered: {
    border: '1px solid #1890ff',
  } as Properties,
  notHovered: {
    border: '1px solid #fff',
  } as Properties
}

export const fileStyles: AttachmentStyle = {
  thumb: {
    fontFamily: 'Avenir',
    padding: '12px',
    borderRadius: '14px',
    display: 'inline-block',
    marginBottom: '4px',
    marginRight: '2px',
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  loading: {
    fontFamily: 'Avenir',
    color: 'white',
    padding: '13px',
    display: 'inline-block',
    borderRadius: '14px',
    marginRight: '2px',
    width: '136px',
    marginBottom: '4px',
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
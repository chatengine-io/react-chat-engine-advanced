import { Properties } from 'csstype';

export interface AttachmentStyle {
  attachmentThumb?: Properties;
  attachmentLoading?: Properties;
  attachmentHovered?: Properties;
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
  border: '1px solid #fff',
};

export const imageStyles: AttachmentStyle = {
  attachmentThumb: {
    ...imageBaseStyles,
    display: 'inline',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  attachmentLoading: {
    ...imageBaseStyles,
    fontFamily: 'Avenir',
    color: 'white',
    display: 'inline-block',
    marginRight: '2px',
    marginBottom: '4px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  attachmentHovered: {
    border: '1px solid #1890ff',
  } as Properties,
};

const fileBaseStlyes = {
  fontFamily: 'Avenir',
  padding: '12px',
  borderRadius: '14px',
  display: 'inline-block',
  marginRight: '2px',
  marginBottom: '4px',
  color: '#434343',
  border: '1px solid #434343',
};

export const fileStyles: AttachmentStyle = {
  attachmentThumb: {
    ...fileBaseStlyes,
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  attachmentLoading: {
    ...fileBaseStlyes,
    color: 'white',
    width: '136px',
    marginLeft: '4px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  attachmentHovered: {
    color: '#1890ff',
    border: '1px solid #1890ff',
  } as Properties,
};

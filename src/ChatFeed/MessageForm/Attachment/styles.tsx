import { Properties } from 'csstype';

export interface AttachmentStyles {
  filePreview?: Properties;
  imagePreview?: Properties;
  closeIcon?: Properties;
}

export const styles = {
  filePreview: {
    fontFamily: 'Avenir',
    padding: '12px',
    display: 'inline-block',
    position: 'relative',
    border: '1px solid #40a9ff',
    color: '#434343',
    borderRadius: '14px',
    paddingRight: '32px',
  } as Properties,
  imagePreview: {
    height: '108px',
    width: '108px',
    border: '1px solid #afafaf',
    borderRadius: '8px',
    objectFit: 'cover',
    display: 'inline',
  } as Properties,
  closeIcon: {
    position: 'relative',
    right: '29px',
    color: '#40a9ff',
    backgroundColor: 'white',
    border: '1px solid white',
    borderRadius: '2.5px 0px 0px 0px',
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
};

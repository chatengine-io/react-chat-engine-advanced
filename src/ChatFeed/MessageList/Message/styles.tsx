import { Properties } from 'csstype';

export const theirStyles = {
  message: {
    cursor: 'pointer',
    color: 'black',
    float: 'left',
    padding: '12px',
    fontSize: '15px',
    fontFamily: 'Avenir',
    whiteSpace: 'pre-line',
    backgroundColor: '#f1f0f0',
    overflowWrap: 'anywhere',
    maxWidth: 'calc(100% - 100px)',
    // CSS Transitions
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  nameText: {
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  },
  timeTag: {
    position: 'relative',
    top: '12px',
    left: '8px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgba(0, 0, 0, 0.4)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
};

export const myStyles = {
  message: {
    color: 'white',
    backgroundColor: '#1890ff',
    cursor: 'pointer',
    float: 'right',
    textAlign: 'left',
    // Stay right but render text
    padding: '12px',
    fontSize: '15px',
    fontFamily: 'Avenir',
    whiteSpace: 'pre-line',
    overflowWrap: 'anywhere',
    maxWidth: 'calc(100% - 100px)',
    // CSS Transitions
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  timeTag: {
    fontFamily: 'Avenir',
    position: 'relative',
    top: '12px',
    right: '8px',
    fontSize: '14px',
    color: 'rgb(24, 144, 255)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
  thumbnail: {
    cursor: 'pointer',
    textAlign: 'right',
    display: 'inline',
    objectFit: 'cover',
    borderRadius: '0.3em',
    paddingRight: '2px',
    // Size
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
  } as Properties,
  fileView: {
    fontFamily: 'Avenir',
    padding: '12px',
    borderRadius: '14px',
    display: 'inline-block',
    marginBottom: '4px',
    marginRight: '2px',
    cursor: 'pointer',
    color: '#434343',
    border: '1px solid #434343',
  } as Properties,
};

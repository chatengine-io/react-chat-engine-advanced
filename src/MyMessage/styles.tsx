import { Properties } from 'csstype';
export const styles = {
  myMessage: {
    color: 'white',
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
    position: 'relative',
    top: 'calc(50% - 12px)',
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
};

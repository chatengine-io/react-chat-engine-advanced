import { Properties } from 'csstype';

export interface MessageStyle {
  dateTime?: Properties;
  row?: Properties;
  image?: Properties;
  file?: Properties;
  avatar?: Properties;
  message?: Properties;
  senderText?: Properties;
  timeTag?: Properties;
  dot?: Properties;
}

export const theirStyles: MessageStyle = {
  dateTime: {} as Properties,
  row: { width: '100%' } as Properties,
  image: {} as Properties,
  file: {} as Properties,
  avatar: {} as Properties,
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
  senderText: {
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  } as Properties,
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
  dot: { float: 'left', marginLeft: '4px' } as Properties,
};

export const myStyles = {
  dateTime: {} as Properties,
  row: {
    width: '100%',
    textAlign: 'right',
  } as Properties,
  image: {} as Properties,
  file: {} as Properties,
  avatar: {} as Properties,
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
  senderText: {
    display: 'none',
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
  dot: { float: 'right', marginLeft: '4px' } as Properties,
};

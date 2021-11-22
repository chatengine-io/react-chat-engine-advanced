import { Properties } from 'csstype';

export interface MessageStyle {
  dateTime?: Properties;
  messageStyle?: Properties; // div not messageStyle
  attachment?: Properties;
  avatar?: Properties;
  message?: Properties;
  senderText?: Properties;
  timeTag?: Properties;
  dot?: Properties;
}

export const theirStyles: MessageStyle = {
  dateTime: {} as Properties,
  messageStyle: { width: '100%', position: 'relative' } as Properties,
  attachment: {} as Properties,
  avatar: {
    position: 'absolute',
    bottom: '15px',
    left: '3px',
  } as Properties,
  message: {
    cursor: 'pointer',
    display: 'inline-block',
    color: 'black',
    padding: '12px',
    marginLeft: '48px',
    fontSize: '15px',
    fontFamily: 'Avenir',
    whiteSpace: 'pre-line',
    backgroundColor: '#f1f0f0',
    overflowWrap: 'anywhere',
    // CSS Transitions
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
  senderText: {
    width: 'calc(100% - 64px)',
    border: '1px solid red',
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  } as Properties,
  timeTag: {
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

export const myStyles: MessageStyle = {
  dateTime: {} as Properties,
  messageStyle: {
    width: '100%',
    textAlign: 'right',
  } as Properties,
  attachment: {} as Properties,
  avatar: {} as Properties,
  message: {
    color: 'white',
    display: 'inline-block',
    backgroundColor: '#1890ff',
    cursor: 'pointer',
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
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgb(24, 144, 255)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
  dot: { float: 'right', marginLeft: '4px' } as Properties,
};

import { Properties } from 'csstype';

export interface MessageStyle {
  messageStyle?: Properties;
  messageDateTimeStyle?: Properties;
  messageSenderUsernameStyle?: Properties;
  messageAttachmentsStyle?: Properties;
  messageBodyStyle?: Properties;
  messageTimeTagStyle?: Properties;
  messageBubbleStyle?: Properties;
  messageReadsStyle?: Properties;
  messageReadStyle?: Properties;
  messageAvatarStyle?: Properties;
}

export const theirStyles: MessageStyle = {
  messageStyle: { width: '100%', position: 'relative' } as Properties,
  messageDateTimeStyle: {} as Properties,
  messageSenderUsernameStyle: {
    width: 'calc(100% - 64px)',
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  } as Properties,
  messageAttachmentsStyle: {
    display: 'auto',
    paddingLeft: '48px',
    width: 'calc(100% - 48px)',
  } as Properties,
  messageBodyStyle: {
    width: 'calc(100% - 2px)',
  } as Properties,
  messageTimeTagStyle: {
    marginLeft: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgba(0, 0, 0, 0.4)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
  messageBubbleStyle: {
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
  messageReadsStyle: {
    marginLeft: '48px',
    width: 'calc(100% - 50px)',
  } as Properties,
  messageReadStyle: { float: 'left', marginLeft: '4px' } as Properties,
  messageAvatarStyle: {
    position: 'absolute',
    bottom: '12px',
    left: '2px',
  } as Properties,
};

export const myStyles: MessageStyle = {
  messageStyle: {
    width: '100%',
    textAlign: 'right',
  } as Properties,
  messageDateTimeStyle: {} as Properties,
  messageSenderUsernameStyle: {
    display: 'none',
  } as Properties,
  messageAttachmentsStyle: {
    display: 'auto',
    paddingLeft: '48px',
    width: 'calc(100% - 48px)',
  } as Properties,
  messageBodyStyle: {
    width: 'calc(100% - 2px)',
  } as Properties,
  messageTimeTagStyle: {
    marginRight: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgb(24, 144, 255)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
  messageBubbleStyle: {
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
  messageReadsStyle: { width: '100%' } as Properties,
  messageReadStyle: { float: 'right', marginLeft: '4px' } as Properties,
  messageAvatarStyle: { display: 'none' } as Properties,
};

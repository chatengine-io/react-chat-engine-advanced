export interface MessageStyle {
  messageStyle?: React.CSSProperties;
  messageDateTimeStyle?: React.CSSProperties;
  messageSenderUsernameStyle?: React.CSSProperties;
  messageAttachmentsStyle?: React.CSSProperties;
  messageAttachmentsImageStyle?: React.CSSProperties;
  messageAttachmentsFileStyle?: React.CSSProperties;
  messageBodyStyle?: React.CSSProperties;
  messageTimeTagStyle?: React.CSSProperties;
  messageBubbleStyle?: React.CSSProperties;
  messageReadsStyle?: React.CSSProperties;
  messageReadStyle?: React.CSSProperties;
  messageAvatarStyle?: React.CSSProperties;
}

export const theirStyles: MessageStyle = {
  messageStyle: { width: '100%', position: 'relative' },
  messageSenderUsernameStyle: {
    width: 'calc(100% - 64px)',
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  },
  messageAttachmentsStyle: {
    display: 'auto',
    paddingLeft: '48px',
    width: 'calc(100% - 48px)',
  },
  messageBodyStyle: {
    position: 'relative',
    width: 'calc(100% - 2px)',
  },
  messageTimeTagStyle: {
    marginLeft: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgba(0, 0, 0, 0.4)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  },
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
  },
  messageReadsStyle: {
    marginLeft: '48px',
    width: 'calc(100% - 50px)',
  },
  messageReadStyle: {
    marginLeft: '4px',
    display: 'inline-block',
  },
  messageAvatarStyle: {
    position: 'absolute',
    bottom: '0px',
    left: '2px',
  },
};

export const myStyles: MessageStyle = {
  messageStyle: {
    width: '100%',
    textAlign: 'right',
  },
  messageSenderUsernameStyle: {
    display: 'none',
  },
  messageAttachmentsStyle: {
    display: 'auto',
    paddingLeft: '48px',
    width: 'calc(100% - 48px)',
  },
  messageBodyStyle: {
    position: 'relative',
    width: 'calc(100% - 2px)',
  },
  messageTimeTagStyle: {
    marginRight: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgb(24, 144, 255)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  },
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
  },
  messageReadsStyle: { width: '100%' },
  messageReadStyle: { float: 'right', marginLeft: '4px' },
  messageAvatarStyle: { display: 'none' },
};

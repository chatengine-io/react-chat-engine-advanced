export interface MessageStyle {
  style?: React.CSSProperties;
  dateTimeStyle?: React.CSSProperties;
  senderUsernameStyle?: React.CSSProperties;
  attachmentsStyle?: React.CSSProperties;
  attachmentsImageStyle?: React.CSSProperties;
  attachmentsFileStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  timeTagStyle?: React.CSSProperties;
  bubbleStyle?: React.CSSProperties;
  readsStyle?: React.CSSProperties;
  readStyle?: React.CSSProperties;
  avatarStyle?: React.CSSProperties;
}

export const theirStyles: MessageStyle = {
  style: { width: '100%', position: 'relative' },
  senderUsernameStyle: {
    width: 'calc(100% - 64px)',
    fontFamily: 'Avenir',
    paddingLeft: '62px',
    paddingBottom: '2px',
    color: 'rgba(0, 0, 0, .40)',
    fontSize: '15px',
  },
  attachmentsStyle: {
    display: 'auto',
    paddingLeft: '48px',
    width: 'calc(100% - 48px)',
  },
  bodyStyle: {
    position: 'relative',
    width: 'calc(100% - 2px)',
  },
  timeTagStyle: {
    marginLeft: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgba(0, 0, 0, 0.4)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  },
  bubbleStyle: {
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
    maxWidth: 'calc(100% - 100px - 48px)',
    // CSS Transitions
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  },
  readsStyle: {
    marginLeft: '48px',
    width: 'calc(100% - 50px)',
  },
  readStyle: {
    marginLeft: '4px',
    float: 'left',
  },
  avatarStyle: {
    position: 'absolute',
    bottom: '0px',
    left: '2px',
  },
};

export const myStyles: MessageStyle = {
  style: {
    width: '100%',
    textAlign: 'right',
  },
  senderUsernameStyle: {
    display: 'none',
  },
  attachmentsStyle: {
    display: 'auto',
    marginLeft: '48px',
    width: 'calc(100% - 48px)',
  },
  bodyStyle: {
    position: 'relative',
    width: 'calc(100% - 2px)',
  },
  timeTagStyle: {
    marginRight: '4px',
    fontSize: '14px',
    fontFamily: 'Avenir',
    color: 'rgb(24, 144, 255)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  },
  bubbleStyle: {
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
  readsStyle: { width: '100%' },
  readStyle: { float: 'right', marginLeft: '4px' },
  avatarStyle: { display: 'none' },
};

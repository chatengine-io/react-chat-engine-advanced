import { Properties } from 'csstype';

export const styles = {
  theirMessage: {
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
    top: 'calc(50% - 12px)',
    left: '8px',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.4)',
    // CSS Transitions
    transition: 'all .15s ease',
    WebkitTransition: 'all .15s ease',
    MozTransition: 'all .15s ease',
  } as Properties,
};

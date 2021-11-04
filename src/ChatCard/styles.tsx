import { Properties } from 'csstype';

export const styles = {
  chatContainer: {
    fontFamily: 'Avenir',
    padding: '16px',
    paddingBottom: '12px',
    cursor: 'pointer',
  } as Properties,
  titleText: {
    fontWeight: 500,
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  } as Properties,
  messageText: {
    width: '75%',
    color: 'rgba(153, 153, 153, 1)',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-block',
  } as Properties,
  activeChat: {
    backgroundColor: '#d9d9d9',
    border: '0px solid white',
    borderRadius: '12px',
  } as Properties,
};

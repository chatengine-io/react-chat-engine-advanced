import { Properties } from 'csstype';

export const styles = {
  chatContainer: {
    fontFamily: 'Avenir',
    padding: '16px',
    borderRadius: '12px',
    paddingBottom: '12px',
    cursor: 'pointer',
    transition: 'all .44s ease',
    WebkitTransition: 'all .44s ease',
    MozTransition: 'all .44s ease',
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
  } as Properties,
  hoveredChat: {
    backgroundColor: '#f5f5f5',
    border: '0px solid white',
  } as Properties,
  loadingBar: {
    borderRadius: '4px',
    backgroundColor: '#e2e2e2',
    height: '12px',
    display: 'inline-block',
  } as Properties,
};

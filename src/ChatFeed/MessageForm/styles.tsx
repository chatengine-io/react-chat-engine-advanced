import { Properties } from 'csstype';

export interface MessageFormStyles {
  messageForm?: Properties;
  input?: Properties;
  sendButton?: Properties;
}

export const styles = {
  messageForm: {
    paddingTop: '4px',
  } as Properties,
  input: {
    border: '1px solid white',
    width: 'calc(100% - 24px - 116px)',
    outline: 'none',
    fontSize: '15px',
    fontFamily: 'Avenir',
    paddingLeft: '12px',
    paddingRight: '12px',
    resize: 'none',
    overflowX: 'hidden',
    // Tweak Position
    position: 'relative',
    top: '6px',
  } as Properties,
  sendButton: {
    cursor: 'pointer',
    fontFamily: 'Avenir',
    display: 'inline-block',
    borderRadius: '8px',
    padding: '6px 12px',
    color: 'white',
    // Tweak Position
    position: 'relative',
    bottom: '6px',
  } as Properties,
};

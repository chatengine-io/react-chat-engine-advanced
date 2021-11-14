import { Properties } from 'csstype';

export interface MessageFormStyles {
  messageForm?: Properties;
  input?: Properties;
}

export const styles = {
  messageForm: {} as Properties,
  input: {
    border: '1px solid white',
    width: 'calc(100% - 64px - 24px - 44px)',
    outline: 'none',
    fontSize: '15px',
    fontFamily: 'Avenir',
    paddingLeft: '12px',
    paddingRight: '12px',
    position: 'relative',
    left: '12px',
    resize: 'none',
    overflowX: 'hidden',
  } as Properties,
};

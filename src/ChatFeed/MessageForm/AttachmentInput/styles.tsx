import { Properties } from 'csstype';

export interface AttachmentInputStyles {
  attachmentInput?: Properties;
  attachmentIcon?: Properties;
}

export const styles = {
  attachmentInput: {
    height: '0px',
    display: 'inline',
    padding: '6px 12px',
    position: 'relative',
    bottom: '6px',
  } as Properties,
  attachmentIcon: {
    backgroundColor: 'white',
    border: '1px solid white',
    cursor: 'pointer',
    fontFamily: 'Avenir',
  } as Properties,
};

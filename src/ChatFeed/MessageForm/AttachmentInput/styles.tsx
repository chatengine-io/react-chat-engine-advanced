import { Properties } from 'csstype';

export interface AttachmentInputStyles {
  attachmentInput?: Properties;
  addAttachmentIcon?: Properties;
}

export const styles = {
  attachmentInput: {
    height: '0px',
    display: 'inline',
    padding: '6px 12px',
    position: 'relative',
    bottom: '6px',
  } as Properties,
  addAttachmentIcon: {
    backgroundColor: 'white',
    border: '1px solid white',
    cursor: 'pointer',
    fontFamily: 'Avenir',
  } as Properties,
};

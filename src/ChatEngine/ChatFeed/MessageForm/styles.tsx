import { Properties } from 'csstype';

import { AttachmentStyles } from './Attachment/styles';
import { AttachmentInputStyles } from './AttachmentInput/styles';

export interface MessageFormStyles
  extends AttachmentStyles,
    AttachmentInputStyles {
  messageForm?: Properties;
  input?: Properties;
  sendButton?: Properties;
  attachmentWrapper?: Properties;
  removeAttachmentIcon?: Properties;
}

export const styles: MessageFormStyles = {
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
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
    // Tweak Position
    position: 'relative',
    bottom: '6px',
  } as Properties,
  attachmentWrapper: {
    padding: '6px',
    display: 'inline-block',
    position: 'relative',
  } as Properties,
  removeAttachmentIcon: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    width: '30px',
    height: '30px',
    color: '#40a9ff',
    backgroundColor: 'white',
    border: '1px solid #fff',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
};

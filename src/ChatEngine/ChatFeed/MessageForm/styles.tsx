import { Properties } from 'csstype';

import { AttachmentInputStyles } from './AttachmentInput/styles';

export interface MessageFormStyles extends AttachmentInputStyles {
  formStyle?: Properties;
  messageInputStyle?: Properties;
  sendButtonStyle?: Properties;
  draftAttachmentWrapperStyle?: Properties;
  draftAttachmentRemoveStyle?: Properties;
}

export const styles: MessageFormStyles = {
  formStyle: {
    paddingTop: '4px',
  } as Properties,
  messageInputStyle: {
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
  sendButtonStyle: {
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
  draftAttachmentWrapperStyle: {
    padding: '6px',
    display: 'inline-block',
    position: 'relative',
  } as Properties,
  draftAttachmentRemoveStyle: {
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

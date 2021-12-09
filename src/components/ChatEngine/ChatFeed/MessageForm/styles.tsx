export interface MessageFormStyles {
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  sendButtonStyle?: React.CSSProperties;
  attachmentInputStyle?: React.CSSProperties;
  attachmentInputIconStyle?: React.CSSProperties;
  draftAttachmentStyle?: React.CSSProperties;
  draftAttachmentRemoveStyle?: React.CSSProperties;
  draftImageStyle?: React.CSSProperties;
  draftFileStyle?: React.CSSProperties;
}

export const styles: MessageFormStyles = {
  style: {
    paddingTop: '4px',
  },
  inputStyle: {
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
  },
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
  },
  draftAttachmentStyle: {
    padding: '6px',
    display: 'inline-block',
    position: 'relative',
  },
  draftAttachmentRemoveStyle: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    width: '30px',
    height: '30px',
    color: '#40a9ff',
    backgroundColor: 'white',
    border: '1px solid rgb(67, 67, 67)',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  },
  draftImageStyle: {
    padding: '6px',
    height: '60px',
    width: '60px',
  },
  draftFileStyle: {},
};

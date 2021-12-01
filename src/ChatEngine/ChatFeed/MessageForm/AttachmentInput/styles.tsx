export interface AttachmentInputStyles {
  attachmentInputStyle?: React.CSSProperties;
  attachmentInputIconStyle?: React.CSSProperties;
}

export const styles: AttachmentInputStyles = {
  attachmentInputStyle: {
    height: '0px',
    display: 'inline',
    padding: '6px 12px',
    position: 'relative',
    bottom: '6px',
  },
  attachmentInputIconStyle: {
    backgroundColor: 'white',
    border: '1px solid white',
    cursor: 'pointer',
  },
};

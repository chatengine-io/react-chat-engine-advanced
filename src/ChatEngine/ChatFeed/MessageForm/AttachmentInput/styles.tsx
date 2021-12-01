export interface AttachmentInputStyles {
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

export const styles: AttachmentInputStyles = {
  style: {
    height: '0px',
    display: 'inline',
    padding: '6px 12px',
    position: 'relative',
    bottom: '6px',
  },
  iconStyle: {
    backgroundColor: 'white',
    border: '1px solid white',
    cursor: 'pointer',
  },
};

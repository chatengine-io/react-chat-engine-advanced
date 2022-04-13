export interface ChatFormStyles {
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

export const styles: ChatFormStyles = {
  style: {
    position: 'relative',
    height: '64px',
    width: '100%',
    backgroundColor: 'white',
  },
  titleStyle: {
    // Position
    position: 'absolute',
    top: '16px',
    left: '14px',
    // Size
    fontSize: '26px',
    // Style
    fontFamily: 'Avenir',
    fontWeight: 600,
  },
  inputStyle: {
    // Position
    position: 'absolute',
    top: '15px',
    left: '14px',
    // Size
    width: 'calc(100% - 28px)',
  },
  buttonStyle: {
    // Position
    position: 'absolute',
    top: '15px',
    right: '14px',
    // Style
    fontFamily: 'Avenir',
    fontWeight: 600,
  },
};

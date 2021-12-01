export interface ChatFormStyles {
  chatFormStyle?: React.CSSProperties;
  myChatsTitleStyle?: React.CSSProperties;
  chatFormInputStyle?: React.CSSProperties;
  chatFormButtonStyle?: React.CSSProperties;
}

export const styles: ChatFormStyles = {
  chatFormStyle: {
    position: 'relative',
    height: '64px',
    width: '100%',
    backgroundColor: 'white',
  },
  myChatsTitleStyle: {
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
  chatFormInputStyle: {
    // Position
    position: 'absolute',
    top: '16px',
    left: '14px',
    // Size
    width: 'calc(100% - 28px)',
  },
  chatFormButtonStyle: {
    // Position
    position: 'absolute',
    top: '15px',
    right: '14px',
    // Style
    fontFamily: 'Avenir',
    fontWeight: 600,
  },
};

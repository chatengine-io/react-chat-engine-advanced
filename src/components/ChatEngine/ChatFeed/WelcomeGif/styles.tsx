export interface WelcomeGifStyles {
  style?: React.CSSProperties;
  gifStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

export const styles: WelcomeGifStyles = {
  style: {
    width: '100%',
    textAlign: 'center',
  },
  gifStyle: { width: '50%', maxWidth: '200px' },
  textStyle: {
    color: '#afafaf',
    fontWeight: 600,
    fontSize: '14px',
    fontFamily: 'Avenir',
  },
};

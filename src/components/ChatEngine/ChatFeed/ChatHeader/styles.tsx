export interface ChatHeaderStyles {
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  mobileOptionStyle?: React.CSSProperties;
}

export const styles: ChatHeaderStyles = {
  style: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  },
  titleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 600,
  },
  subtitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '12px',
  },
  mobileOptionStyle: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  },
};

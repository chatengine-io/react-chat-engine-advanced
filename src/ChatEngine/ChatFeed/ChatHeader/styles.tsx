export interface ChatHeaderStyles {
  chatHeaderStyle?: React.CSSProperties;
  chatHeaderTitleStyle?: React.CSSProperties;
  chatHeaderSubtitleStyle?: React.CSSProperties;
  chatHeaderMobileOptionStyle?: React.CSSProperties;
}

export const styles: ChatHeaderStyles = {
  chatHeaderStyle: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  },
  chatHeaderTitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 600,
  },
  chatHeaderSubtitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '12px',
  },
  chatHeaderMobileOptionStyle: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  },
};

export interface ChatCardStyle {
  style?: React.CSSProperties;
  hoveredStyle?: React.CSSProperties;
  activeStyle?: React.CSSProperties;
  avatarStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  notificationStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  timeStampStyle?: React.CSSProperties;
  loadingBarStyle?: React.CSSProperties;
}

export const styles: ChatCardStyle = {
  style: {
    position: 'relative',
    height: '76px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all .44s ease',
    WebkitTransition: 'all .44s ease',
    MozTransition: 'all .44s ease',
  },
  hoveredStyle: {
    backgroundColor: '#f5f5f5',
    border: '0px solid white',
  },
  activeStyle: {
    backgroundColor: '#d9d9d9',
    border: '0px solid white',
  },
  avatarStyle: { position: 'absolute', top: '16px', left: '12px' },
  titleStyle: {
    // Position
    position: 'absolute',
    top: '12px',
    left: '68px',
    // Size
    width: 'calc(100% - 68px - 32px)',
    // Font
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Avenir',
  },
  notificationStyle: {
    // Position
    position: 'absolute',
    top: 'calc(12px + 6px)',
    right: '12px',
    // Style
    width: '12px',
    height: '12px',
    borderRadius: '6px',
    backgroundColor: '#1890ff',
    float: 'right',
  },
  subtitleStyle: {
    // Position
    position: 'absolute',
    bottom: '12px',
    left: '68px',
    // Size
    width: 'calc(70% - 68px)',
    // Style
    color: 'rgba(153, 153, 153, 1)',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Avenir',
  },
  timeStampStyle: {
    // Position
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    // Size
    width: '20%',
    // Style
    textAlign: 'right',
    color: 'rgba(153, 153, 153, 1)',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Avenir',
  },
  loadingBarStyle: {
    borderRadius: '4px',
    backgroundColor: '#e2e2e2',
    color: '#e2e2e2',
  },
};

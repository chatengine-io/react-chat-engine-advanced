export interface ChatCardStyle {
  chatCardStyle?: React.CSSProperties;
  hoveredChatCardStyle?: React.CSSProperties;
  activeChatCardStyle?: React.CSSProperties;
  chatCardTitleStyle?: React.CSSProperties;
  chatCardNotificationStyle?: React.CSSProperties;
  chatCardSubtitleStyle?: React.CSSProperties;
  chatCardTimeStampStyle?: React.CSSProperties;
  chatCardLoadingBarStyle?: React.CSSProperties;
}

export const styles: ChatCardStyle = {
  chatCardStyle: {
    position: 'relative',
    height: '64px',
    borderRadius: '12px',
    paddingBottom: '12px',
    cursor: 'pointer',
    transition: 'all .44s ease',
    WebkitTransition: 'all .44s ease',
    MozTransition: 'all .44s ease',
  },
  hoveredChatCardStyle: {
    backgroundColor: '#f5f5f5',
    border: '0px solid white',
  },
  activeChatCardStyle: {
    backgroundColor: '#d9d9d9',
    border: '0px solid white',
  },
  chatCardTitleStyle: {
    // Position
    position: 'absolute',
    top: '12px',
    left: '12px',
    // Size
    width: 'calc(100% - 12px - 32px)',
    // Font
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Avenir',
  },
  chatCardNotificationStyle: {
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
  chatCardSubtitleStyle: {
    // Position
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    // Size
    width: '70%',
    // Style
    color: 'rgba(153, 153, 153, 1)',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Avenir',
  },
  chatCardTimeStampStyle: {
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
  chatCardLoadingBarStyle: {
    borderRadius: '4px',
    backgroundColor: '#e2e2e2',
    color: '#e2e2e2',
  },
};

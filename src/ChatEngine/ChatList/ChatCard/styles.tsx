import { Properties } from 'csstype';

export interface ChatCardStyle {
  chatCardStyle?: Properties;
  hoveredChatCardStyle?: Properties;
  activeChatCardStyle?: Properties;
  chatCardTitleStyle?: Properties;
  chatCardNotificationStyle?: Properties;
  chatCardSubtitleStyle?: Properties;
  chatCardTimeStampStyle?: Properties;
  chatCardLoadingBarStyle?: Properties;
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
  } as Properties,
  hoveredChatCardStyle: {
    backgroundColor: '#f5f5f5',
    border: '0px solid white',
  } as Properties,
  activeChatCardStyle: {
    backgroundColor: '#d9d9d9',
    border: '0px solid white',
  } as Properties,
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
  } as Properties,
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
  } as Properties,
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
  } as Properties,
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
  } as Properties,
  chatCardLoadingBarStyle: {
    borderRadius: '4px',
    backgroundColor: '#e2e2e2',
    color: '#e2e2e2',
  } as Properties,
};

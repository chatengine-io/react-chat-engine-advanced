export interface ChatListStyles {
  chatListStyle?: React.CSSProperties;
  chatListLoadingStyle?: React.CSSProperties;
  chatListLoadTriggerStyle?: React.CSSProperties;
}

export const styles: ChatListStyles = {
  chatListStyle: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundColor: 'white',
    fontFamily: 'Avenir',
  },
  chatListLoadingStyle: {
    overflowY: 'hidden',
  },
  chatListLoadTriggerStyle: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    backgroundColor: '#e2e2e2',
    margin: '4px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: '4px',
  },
};

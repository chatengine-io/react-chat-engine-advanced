export interface ChatListStyles {
  style?: React.CSSProperties;
  loadingMoreChatsStyle?: React.CSSProperties;
}

export const styles: ChatListStyles = {
  style: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    backgroundColor: 'white',
  },
  loadingMoreChatsStyle: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    backgroundColor: '#e2e2e2',
    margin: '4px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: '4px',
  },
};

export interface ChatFeedStyles {
  style?: React.CSSProperties;
  chatHeaderStyle?: React.CSSProperties;
  messageListStyle?: React.CSSProperties;
  messageFormStyle?: React.CSSProperties;
}

export const styles: ChatFeedStyles = {
  style: {
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  chatHeaderStyle: {},
  messageListStyle: {
    height: 'calc(100% - 85px - 48px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'relative',
    backgroundColor: 'white',
  },
  messageFormStyle: {
    width: '100%',
    position: 'absolute',
    bottom: '0px',
  },
};

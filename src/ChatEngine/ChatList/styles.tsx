import { Properties } from 'csstype';

export interface ChatListStyles {
  chatListContainer?: Properties;
  loadingStyle?: Properties;
  chatLoader?: Properties;
}

export const styles: ChatListStyles = {
  chatListContainer: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    borderRight: '1px solid #afafaf',
    backgroundColor: 'white',
    fontFamily: 'Avenir',
  } as Properties,
  loadingStyle: {
    overflowY: 'hidden',
  } as Properties,
  chatLoader: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    backgroundColor: '#e2e2e2',
    margin: '4px',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderRadius: '4px',
  } as Properties,
};

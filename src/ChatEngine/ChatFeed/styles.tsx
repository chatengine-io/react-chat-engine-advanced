import { Properties } from 'csstype';

export interface ChatFeedStyles {
  chatFeedStyle?: Properties;
  chatHeaderStyle?: Properties;
  messageListStyle?: Properties;
  messageFormStyle?: Properties;
}

export const styles: ChatFeedStyles = {
  chatFeedStyle: {
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  } as Properties,
  chatHeaderStyle: {} as Properties,
  messageListStyle: {
    height: 'calc(100% - 85px - 48px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'relative',
    backgroundColor: 'white',
  } as Properties,
  messageFormStyle: {
    width: '100%',
  } as Properties,
};

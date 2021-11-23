import { Properties } from 'csstype';

export interface ChatFeedStyles {
  chatFeedStyle?: Properties;
}

export const styles: ChatFeedStyles = {
  chatFeedStyle: {
    height: '100%',
    position: 'relative',
  } as Properties,
};

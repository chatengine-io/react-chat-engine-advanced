import { Properties } from 'csstype';

export interface ChatFeedStyles {
  chatFeedStyle?: Properties;
}

export const styles: ChatFeedStyles = {
  chatFeedStyle: {
    height: '800px',
    position: 'relative',
  } as Properties,
};

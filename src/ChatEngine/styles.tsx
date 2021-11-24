import { Properties } from 'csstype';

export interface ChatEngineStyles {
  chatEngineStyle?: Properties;
  chatListColumnStyle?: Properties;
  chatFeedColumnStyle?: Properties;
  chatSettingsColumnStyle?: Properties;
}

export const styles: ChatEngineStyles = {
  chatEngineStyle: { position: 'relative' } as Properties,
  chatListColumnStyle: {
    height: '100%',
    borderRight: '1px solid #afafaf',
  } as Properties,
  chatFeedColumnStyle: { height: '100%' } as Properties,
  chatSettingsColumnStyle: {
    height: '100%',
    borderLeft: '1px solid #afafaf',
  } as Properties,
};

import { Properties } from 'csstype';

export interface ChatSettingsStyles {
  chatSettingsStyle?: Properties;
  chatTitleStyle?: Properties;
  peopleSettingsStyle?: Properties;
  photosSettingsStyle?: Properties;
  optionsSettingsStyle?: Properties;
}

export const styles: ChatSettingsStyles = {
  chatSettingsStyle: {},
  chatTitleStyle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: '18px',
    fontWeight: 600,
  },
};

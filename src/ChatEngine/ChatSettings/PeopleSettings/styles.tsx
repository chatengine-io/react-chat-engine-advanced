import { Properties } from 'csstype';

export interface PeopleSettingsStyles {
  style?: Properties;
  avatarStyle?: Properties;
  usernameStyle?: Properties;
  deleteButtonStyle?: Properties;
  optionStyle?: Properties;
}

export const styles: PeopleSettingsStyles = {
  style: {},
  avatarStyle: { position: 'absolute', left: '12px', top: '2px' },
  usernameStyle: {
    fontFamily: 'Avenir',
    position: 'absolute',
    left: '72px',
    top: '12px',
    width: 'calc(100% - 84px - 52px - 12px)',
  },
  deleteButtonStyle: { position: 'absolute', right: '12px', top: '8px' },
  optionStyle: { fontFamily: 'Avenir', padding: '8px 12px', cursor: 'pointer' },
};

import { Properties } from 'csstype';

export interface OptionsSettingsStyles {
  style?: Properties;
  deleteChatButtonStyle?: Properties;
}

export const styles: OptionsSettingsStyles = {
  style: {},
  deleteChatButtonStyle: {
    width: 'calc(100% - 24px)',
    position: 'relative',
    left: '12px',
  },
};

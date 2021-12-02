export interface OptionsSettingsStyles {
  style?: React.CSSProperties;
  deleteChatButtonStyle?: React.CSSProperties;
}

export const styles: OptionsSettingsStyles = {
  style: {},
  deleteChatButtonStyle: {
    width: 'calc(100% - 24px)',
    position: 'relative',
    left: '12px',
  },
};

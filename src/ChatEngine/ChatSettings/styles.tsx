export interface ChatSettingsStyles {
  chatSettingsStyle?: React.CSSProperties;
  chatTitleStyle?: React.CSSProperties;
  peopleSettingsStyle?: React.CSSProperties;
  photosSettingsStyle?: React.CSSProperties;
  optionsSettingsStyle?: React.CSSProperties;
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

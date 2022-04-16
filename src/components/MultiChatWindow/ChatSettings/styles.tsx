export interface ChatSettingsStyles {
  style?: React.CSSProperties;
  chatTitleStyle?: React.CSSProperties;
  peopleSettingsStyle?: React.CSSProperties;
  photosSettingsStyle?: React.CSSProperties;
  optionsSettingsStyle?: React.CSSProperties;
}

export const styles: ChatSettingsStyles = {
  style: { backgroundColor: 'white', width: '100%', height: '100%' },
  chatTitleStyle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: '18px',
    fontWeight: 600,
  },
};

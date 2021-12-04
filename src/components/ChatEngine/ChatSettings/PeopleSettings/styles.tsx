export interface PeopleSettingsStyles {
  style?: React.CSSProperties;
  avatarStyle?: React.CSSProperties;
  usernameStyle?: React.CSSProperties;
  deleteButtonStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  addMemberStyle?: React.CSSProperties;
  addMemberInputStyle?: React.CSSProperties;
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
  addMemberStyle: {
    width: 'calc(100% - 12px - 12px)',
    position: 'relative',
    left: '12px',
  },
  addMemberInputStyle: { border: '1px solid rgb(24, 144, 255)' },
};

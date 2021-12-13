export interface AvatarStyles {
  style?: React.CSSProperties;
  statusStyle?: React.CSSProperties;
}

export const styles: AvatarStyles = {
  style: {
    // Position
    position: 'relative',
    // Size
    width: '44px',
    height: '44px',
    // Style
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '48px',
    // Text Style
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: '15px',
    lineHeight: '44px',
    fontWeight: 600,
  },
  statusStyle: {
    // Position
    position: 'absolute',
    top: '0px',
    right: '0px',
    // Style
    width: '8px',
    height: '8px',
    borderRadius: '100%',
    border: '2px solid white',
  },
};

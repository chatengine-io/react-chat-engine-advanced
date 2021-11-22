import { Properties } from 'csstype';

export interface AvatarStyles {
  style?: Properties;
  statusStyle?: Properties;
}

export const styles: AvatarStyles = {
  style: {
    // Position
    position: 'relative',
    // Size
    width: '44px',
    paddingTop: '12px',
    paddingBottom: '12px',
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
    fontWeight: 600,
  } as Properties,
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
  } as Properties,
};

import { Properties } from 'csstype';

export interface AvatarStyles {
  avatarContainer?: Properties;
  avatar?: Properties;
  avatarText?: Properties;
  status?: Properties;
}

export const styles: AvatarStyles = {
  avatarContainer: {
    width: '48px',
    height: '48px',
  } as Properties,
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    color: 'white',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '48px',
  } as Properties,
  avatarText: {
    color: 'white',
    paddingTop: '12px',
    fontFamily: 'Avenir',
    fontSize: '15px',
    fontWeight: 600,
  } as Properties,
  status: {
    width: '8px',
    height: '8px',
    borderRadius: '100%',
    border: '2px solid white',
  } as Properties,
};

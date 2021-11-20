import { Properties } from 'csstype';

export interface ChatHeaderStyles {
  style?: Properties;
  titleStyle?: Properties;
  subtitleStyle?: Properties;
  mobileOptionStyle?: Properties;
}

export const styles: ChatHeaderStyles = {
  style: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  } as Properties,
  titleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 600,
  } as Properties,
  subtitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '12px',
  } as Properties,
  mobileOptionStyle: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  } as Properties,
};

import { Properties } from 'csstype';

export interface ChatHeaderStyles {
  titleSection?: Properties;
  mobileOptiom?: Properties;
  titleContainer?: Properties;
  titleText?: Properties;
  subtitleText?: Properties;
}

export const styles = {
  titleSection: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
  } as Properties,
  mobileOptiom: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  } as Properties,
  titleContainer: {
    width: '100%',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  } as Properties,
  titleText: {
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 600,
  } as Properties,
  subtitleText: {
    fontFamily: 'Avenir',
    fontSize: '12px',
  } as Properties,
};

import { Properties } from 'csstype';

export interface ChatHeaderStyles {
  chatHeaderStyle?: Properties;
  chatHeaderTitleStyle?: Properties;
  chatHeaderSubtitleStyle?: Properties;
  chatHeaderMobileOptionStyle?: Properties;
}

export const styles: ChatHeaderStyles = {
  chatHeaderStyle: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(256, 256, 256, 0.92)',
    padding: '18px 0px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflowX: 'hidden',
  } as Properties,
  chatHeaderTitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 600,
  } as Properties,
  chatHeaderSubtitleStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    fontSize: '12px',
  } as Properties,
  chatHeaderMobileOptionStyle: {
    width: '100%',
    top: '32px',
    textAlign: 'center',
    color: 'rgb(24, 144, 255)',
    overflow: 'hidden',
  } as Properties,
};

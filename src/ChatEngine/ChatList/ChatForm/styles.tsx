import { Properties } from 'csstype';

export interface ChatFormStyles {
  chatFormStyle?: Properties;
  myChatsTitleStyle?: Properties;
  chatFormInputStyle?: Properties;
  chatFormButtonStyle?: Properties;
}

export const styles: ChatFormStyles = {
  chatFormStyle: {
    position: 'relative',
    height: '64px',
    width: '100%',
    backgroundColor: 'white',
  } as Properties,
  myChatsTitleStyle: {
    // Position
    position: 'absolute',
    top: '16px',
    left: '14px',
    // Size
    fontSize: '26px',
    // Style
    fontFamily: 'Avenir',
    fontWeight: 600,
  } as Properties,
  chatFormInputStyle: {
    // Position
    position: 'absolute',
    top: '16px',
    left: '14px',
    // Size
    width: 'calc(100% - 28px)',
  } as Properties,
  chatFormButtonStyle: {
    // Position
    position: 'absolute',
    top: '15px',
    right: '14px',
    // Style
    fontFamily: 'Avenir',
    fontWeight: 600,
  } as Properties,
};

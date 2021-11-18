import { Properties } from 'csstype';

export interface ChatFormStyles {
  chatForm?: Properties;
  chatFormTitle?: Properties;
  chatFormInput?: Properties;
  chatFormButton?: Properties;
}

export const styles: ChatFormStyles = {
  chatForm: {
    padding: '16px 14px',
    backgroundColor: 'white',
    width: 'calc(100% - 28px)',
  } as Properties,
  chatFormTitle: {
    fontFamily: 'Avenir',
    fontWeight: 600,
    fontSize: '26px',
    position: 'relative',
    top: '4px',
  } as Properties,
  chatFormInput: { width: '100%' } as Properties,
  chatFormButton: { float: 'right' } as Properties,
};

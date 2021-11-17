import { Properties } from 'csstype';

export interface DateTimeStyles {
  dateTimeText?: Properties;
}

export const styles: DateTimeStyles = {
  dateTimeText: {
    width: '100%',
    fontFamily: 'Avenir',
    textAlign: 'center',
    paddingTop: '4px',
    paddingBottom: '10px',
    fontSize: '15px',
    color: 'rgba(0, 0, 0, .40)',
  } as Properties,
};

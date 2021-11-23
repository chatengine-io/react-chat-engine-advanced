import { Properties } from 'csstype';

export interface DateTimeStyles {
  dateTimeStyle?: Properties;
}

export const styles: DateTimeStyles = {
  dateTimeStyle: {
    width: '100%',
    fontFamily: 'Avenir',
    textAlign: 'center',
    paddingTop: '4px',
    paddingBottom: '10px',
    fontSize: '15px',
    color: 'rgba(0, 0, 0, .40)',
  } as Properties,
};

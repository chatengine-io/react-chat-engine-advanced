import { Properties } from 'csstype';

export const styles = {
  chatListContainer: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflow: 'scroll',
    overflowX: 'hidden',
    borderRight: '1px solid #afafaf',
    borderRadius: '0px 0px 24px 24px',
    backgroundColor: 'white',
    fontFamily: 'Avenir',
  } as Properties,
  loadingStyle: {
    msOverflowY: 'hidden',
  } as Properties,
};

import { Properties } from 'csstype';

export interface DotStyles {
  dot?: Properties;
}

export const styles: DotStyles = {
  dot: {
    borderRadius: '13px',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '14px',
    // CSS Transitions
    transition: 'all .33s ease',
    WebkitTransition: 'all .33s ease',
    MozTransition: 'all .33s ease',
  } as Properties,
};

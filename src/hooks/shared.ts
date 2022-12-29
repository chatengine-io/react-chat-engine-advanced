import { animateScroll } from 'react-scroll';

export const scrollToBottom = (duration: number, containerId: string) => {
  if (document.getElementById(containerId)) {
    animateScroll.scrollToBottom({
      duration: duration,
      containerId: containerId,
    });
  }
};

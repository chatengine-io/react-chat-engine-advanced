import React, { useState, useRef, useEffect } from 'react';

import { Props } from './props';

import { styles } from './styles';

export const RenderTrigger: React.FC<Props> = (props: Props) => {
  const { children = 'Loading...' } = props;

  const useOnScreen = (ref: React.RefObject<HTMLDivElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        props.onShow && props.onShow();
      } else {
        props.onHide && props.onHide();
      }
    });

    useEffect(() => {
      observer.observe(ref.current as Element);
      return () => observer.disconnect();
    }, []);

    return isIntersecting;
  };

  const ref = useRef<HTMLDivElement>(null);
  ref !== null && useOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{ ...styles.style, ...props.style }}
      className="ce-chat-loader"
    >
      {children}
    </div>
  );
};

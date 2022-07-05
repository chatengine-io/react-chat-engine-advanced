import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Image: React.FC<Props> = (props: Props) => {
  const { url } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const loadingUrl = 'https://chat-engine-assets.s3.amazonaws.com/loading.gif';

  return (
    <img
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      src={url ? url : loadingUrl}
      alt={url ? url : loadingUrl}
      onClick={() => url && window.open(url)}
      style={{
        // Default
        ...styles.style,
        // State
        ...(isHovered ? styles.hoveredStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(isHovered ? props.hoveredStyle : {}),
      }}
      className={`ce-image ${props.className}`}
    />
  );
};

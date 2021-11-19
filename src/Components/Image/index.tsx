import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Image: React.FC<Props> = ({
  url,
  style = {},
  hoveredStyle = {},
}: Props) => {
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
        ...style,
        // Props + State
        ...(isHovered ? hoveredStyle : {}),
        // Docs: No loadingStyle prop
        // They can set isLoading so they can pass loadingStyle with style
      }}
    />
  );
};

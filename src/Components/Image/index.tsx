import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Image: React.FC<Props> = ({
  imageUrl,
  imageStyle = {},
  imageHoveredStyle = {},
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const loadingUrl = 'https://chat-engine-assets.s3.amazonaws.com/loading.gif';

  return (
    <img
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      src={imageUrl ? imageUrl : loadingUrl}
      alt={imageUrl ? imageUrl : loadingUrl}
      onClick={() => imageUrl && window.open(imageUrl)}
      style={{
        // Default
        ...styles.imageStyle,
        ...(!imageUrl ? { border: '1px solid grey' } : {}),
        // State
        ...(isHovered ? styles.imageHoveredStyle : {}),
        // Props
        ...imageStyle,
        // Props + State
        ...(isHovered ? imageHoveredStyle : {}),
        // Docs: No Style prop for isLoading.
        // They can set isLoading and imageStyle accordingly.
      }}
    />
  );
};

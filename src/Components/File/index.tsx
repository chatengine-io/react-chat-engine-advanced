import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { getFileName } from '../../util/file';

export const File: React.FC<Props> = ({
  url,
  fileName,
  style = {},
  hoveredStyle = {},
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const urlOrLoading = () => {
    return url ? getFileName(url) : 'Loading...';
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => url && window.open(url)}
      style={{
        // Default
        ...styles.style,
        ...(!url ? { border: '1px solid grey' } : {}),
        // State
        ...(isHovered ? styles.hoveredStyle : {}),
        // Props
        ...style,
        // Props + State
        ...(isHovered ? hoveredStyle : {}),
        // Docs: No Style prop for isLoading.
        // They can set isLoading and style accordingly.
      }}
    >
      {fileName ? fileName : `📄 ${urlOrLoading()}`}
    </div>
  );
};

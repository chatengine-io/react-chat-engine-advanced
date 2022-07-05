import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { getFileName } from '../../util/file';

const urlOrLoading = (url: string | undefined) => {
  return url ? getFileName(url) : 'Loading...';
};

export const File: React.FC<Props> = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => props.url && window.open(props.url)}
      style={{
        // Default
        ...styles.style,
        ...(!props.url ? { border: '1px solid grey' } : {}),
        // State
        ...(isHovered ? styles.hoveredStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(isHovered ? props.hoveredStyle : {}),
      }}
      className={`ce-file ${props.className}`}
    >
      {props.fileName ? props.fileName : `📄 ${urlOrLoading(props.url)}`}
    </div>
  );
};

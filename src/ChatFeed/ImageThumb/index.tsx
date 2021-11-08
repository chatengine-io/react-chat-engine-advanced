import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const ImageThumb: React.FC<Props> = ({
  attachment,
  isLoading = false,
  children = 'Loading...',
  style = {},
  loadingStyle = {},
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const thumbnailStyle = {
    ...styles.thumbnail,
    ...{ border: hovered ? '1px solid #1890ff' : '1px solid #fff' },
  };

  if (isLoading || !attachment) {
    return (
      <div style={{ ...styles.loadingContainer, ...loadingStyle }}>
        {children}
      </div>
    );
  }

  return (
    <img
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      src={attachment.file}
      alt={'thumb-nail'}
      style={{
        ...thumbnailStyle,
        ...style,
      }}
      onClick={() => window.open(attachment.file)}
    />
  );
};

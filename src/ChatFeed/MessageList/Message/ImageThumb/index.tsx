import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const ImageThumb: React.FC<Props> = ({
  attachment,
  children,
  isLoading = false,
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
        {children ? children : 'Loading...'}
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

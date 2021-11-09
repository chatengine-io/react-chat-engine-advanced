import React, { useState } from 'react';

import { getFileName } from '../../util/file';

import { Props } from './props';
import { styles } from './styles';

export const FileThumb: React.FC<Props> = ({
  attachment,
  children,
  isLoading = false,
  style = {},
  loadingStyle = {},
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const fileStyle = {
    ...styles.fileView,
    ...{
      color: hovered ? '#1890ff' : '#434343',
      border: hovered ? '1px solid #1890ff' : '1px solid #434343',
    },
  };

  if (isLoading || !attachment) {
    return (
      <div style={{ ...styles.loadingContainer, ...loadingStyle }}>
        {children ? children : 'Loading...'}
      </div>
    );
  }

  return (
    <div
      style={{
        ...fileStyle,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(attachment.file)}
    >
      {children ? children : getFileName(attachment.file)}
    </div>
  );
};

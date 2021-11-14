import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Attachment: React.FC<Props> = ({
  file,
  imageUrl,
  onRemove = () => {},
  style = {},
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const hoverStyle = { opacity: hovered ? '1' : '0' };

  return (
    <div
      className="ce-message-attachment-preview"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {imageUrl ? (
        <div
          style={{
            padding: '6px',
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <img
            style={{ ...styles.imagePreview, ...style.imagePreview }}
            src={imageUrl}
            alt={file}
          />
        </div>
      ) : (
        <div
          style={{
            ...styles.filePreview,
            ...style.filePreview,
          }}
        >
          {file}{' '}
        </div>
      )}
      <button
        className="ce-message-attachment-remove-btn"
        style={{ ...styles.closeIcon, ...hoverStyle, ...style.closeIcon }}
        onClick={() => onRemove && onRemove()}
      >
        X
      </button>
    </div>
  );
};

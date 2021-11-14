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
    <span
      className="ce-message-attachment-preview"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...styles.attachmentWrapper, ...style.attachmentWrapper }}
    >
      {imageUrl ? (
        <img
          style={{ ...styles.imagePreview, ...style.imagePreview }}
          src={imageUrl}
          alt={file}
        />
      ) : (
        <div
          style={{
            ...styles.filePreview,
            ...style.filePreview,
          }}
        >
          📄 {file}{' '}
        </div>
      )}
      <button
        className="ce-message-attachment-remove-btn"
        style={{ ...styles.closeIcon, ...hoverStyle, ...style.closeIcon }}
        onClick={() => onRemove && onRemove()}
      >
        X
      </button>
    </span>
  );
};

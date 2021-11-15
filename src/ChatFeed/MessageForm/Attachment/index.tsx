import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const Attachment: React.FC<Props> = ({
  fileName,
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
          style={{
            ...styles.imageAttachmentPreview,
            ...style.imageAttachmentPreview,
          }}
          src={imageUrl}
          alt={fileName}
        />
      ) : (
        <div
          style={{
            ...styles.fileAttachmentPreview,
            ...style.fileAttachmentPreview,
          }}
        >
          📄 {fileName}{' '}
        </div>
      )}

      <button
        className="ce-message-attachment-remove-btn"
        style={{
          ...styles.removeAttachmentIcon,
          ...hoverStyle,
          ...style.removeAttachmentIcon,
        }}
        onClick={() => onRemove && onRemove()}
      >
        X
      </button>
    </span>
  );
};

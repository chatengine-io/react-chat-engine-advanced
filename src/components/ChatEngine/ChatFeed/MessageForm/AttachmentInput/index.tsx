import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

export const AttachmentInput: React.FC<Props> = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const hoverStyle: React.CSSProperties = { color: hovered ? '#06c' : '#444' };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const files = target.files;
    props.onSelectFiles && props.onSelectFiles(files);
  };

  return (
    <form
      className="ce-attachment-input"
      encType="multipart/form-data"
      style={{
        ...styles.style,
        ...props.style,
      }}
    >
      <label htmlFor="files" id="ce-upload-document-button">
        <span
          className="ce-attachment-icon"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...styles.iconStyle,
            ...hoverStyle,
            ...props.iconStyle,
          }}
          onClick={() => {}} // Prevents redirect in StorybookJS
        >
          📎
        </span>
      </label>

      <input
        multiple
        id="files"
        style={{ visibility: 'hidden', height: '0px', width: '0px' }}
        type="file"
        onChange={onSelect}
      />
    </form>
  );
};

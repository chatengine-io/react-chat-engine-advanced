import React, { useState } from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

export const AttachmentInput: React.FC<Props> = ({
  onSelectFiles,
  style = {},
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const hoverStyle: Properties = { color: hovered ? '#06c' : '#444' };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const files = target.files;
    onSelectFiles && onSelectFiles(files);
  };

  return (
    <form
      className="uploader"
      encType="multipart/form-data"
      style={{
        ...styles.attachmentInput,
        ...style.attachmentInput,
      }}
    >
      <label htmlFor="files" id="upload-document-button">
        <span
          className="ce-attachment-icon"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...styles.attachmentIcon,
            ...hoverStyle,
            ...style.attachmentIcon,
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

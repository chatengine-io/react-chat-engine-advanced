import React, { useState, ReactNode } from 'react';

import { getFileName, isImageFromFilePath } from '../../../../util/file';

import { AttachmentProps } from '../../../../util/interfaces';
import { Props } from './props';
import { AttachmentStyle, imageStyles, fileStyles } from './styles';

export const Attachment: React.FC<Props> = ({
  attachment,
  children,
  isLoading = false,
  style = {},
  loadingStyle = {},
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const isImage: boolean = isImageFromFilePath(attachment.file);

  const attachmentStyle: AttachmentStyle = isImage ? imageStyles : fileStyles;

  const thumbStyle = {
    ...attachmentStyle.thumb,
    ...(hovered ? attachmentStyle.hovered : attachmentStyle.notHovered),
    ...style,
  };

  if (isLoading || !attachment) {
    return (
      <div style={{ ...attachmentStyle.loading, ...loadingStyle }}>
        {children ? children : 'Loading...'}
      </div>
    );
  }

  return (
    <div>
      {isImage
        ? renderImage(attachment, thumbStyle, setHovered)
        : renderFile(attachment, children, thumbStyle, setHovered)}
    </div>
  );
};

const renderFile = (
  attachment: AttachmentProps,
  children: ReactNode,
  style: any,
  setHovered: (value: React.SetStateAction<boolean>) => void
) => {
  return (
    <div
      style={style}
      onClick={() => window.open(attachment.file)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children ? children : `📄 ${getFileName(attachment.file)}`}
    </div>
  );
};

const renderImage = (
  attachment: AttachmentProps,
  style: any,
  setHovered: (value: React.SetStateAction<boolean>) => void
) => {
  return (
    <img
      src={attachment.file}
      alt={'thumb-nail'}
      style={style}
      onClick={() => window.open(attachment.file)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

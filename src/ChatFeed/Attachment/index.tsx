import React, { useState, ReactNode } from 'react';

import { getFileName, isImageFromFilePath } from '../../util/file';

import { AttachmentProps } from '../../util/interfaces';
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
    <div
      onClick={() => window.open(attachment.file)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isImage
        ? renderImage(attachment, thumbStyle)
        : renderFile(attachment, children, thumbStyle)}
    </div>
  );
};

const renderFile = (
  attachment: AttachmentProps,
  children: ReactNode,
  style: any
) => {
  return (
    <div style={style}>
      {children ? children : getFileName(attachment.file)}
    </div>
  );
};

const renderImage = (attachment: AttachmentProps, style: any) => {
  return <img src={attachment.file} alt={'thumb-nail'} style={style} />;
};

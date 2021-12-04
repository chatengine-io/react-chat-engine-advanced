import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Image } from '../../../Components/Image';
import { Dropdown } from '../../../Components/Dropdown';
import { AttachmentProps } from '../../../util/interfaces';
import { isImage, getFileName } from '../../../util/file';

export const PhotosSettings: React.FC<Props> = (props: Props) => {
  const { chat = { attachments: [] } } = props;
  const renderImages = (attachments: Array<AttachmentProps>) => {
    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);
      if (isImage(fileName)) {
        return (
          <div
            key={`photo-${index}`}
            style={{ ...styles.imageWrapperStyle, ...props.imageWrapperStyle }}
          >
            <div
              style={{
                ...styles.imagePaddingStyle,
                ...props.imagePaddingStyle,
              }}
            />

            <Image
              key={`attachment_${index}`}
              url={attachment.file !== null ? attachment.file : undefined}
              style={{ ...styles.imageStyle, ...props.imageStyle }}
            />
          </div>
        );
      }
      return <div key={`photo-${index}`} />;
    });
  };

  if (props.renderPhotosSettings) {
    return <>{props.renderPhotosSettings(props)}</>;
  }

  return (
    <Dropdown label="Photos" style={{ ...styles.style, ...props.style }}>
      {renderImages(chat.attachments)}
    </Dropdown>
  );
};

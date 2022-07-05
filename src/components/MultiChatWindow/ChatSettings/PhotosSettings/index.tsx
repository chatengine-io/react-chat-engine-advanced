import React from 'react';

import { PhotosSettingsProps } from './props';
import { styles } from './styles';

import { Image } from '../../../Components/Image';
import { Dropdown } from '../../../Components/Dropdown';
import { AttachmentObject } from '../../../../interfaces';
import { isImage, getFileName } from '../../../util/file';

export const PhotosSettings: React.FC<PhotosSettingsProps> = (
  props: PhotosSettingsProps
) => {
  const { chat = { attachments: [] } } = props;
  const renderImages = (attachments: Array<AttachmentObject>) => {
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
              className="ce-settings-image"
              url={attachment.file !== null ? attachment.file : undefined}
              style={{ ...styles.imageStyle, ...props.imageStyle }}
            />
          </div>
        );
      }
      return <span key={`photo-${index}`} />;
    });
  };

  if (props.renderPhotosSettings) {
    return <>{props.renderPhotosSettings(props)}</>;
  }

  return (
    <Dropdown
      id="ce-settings-photos-dropdown"
      label="Photos"
      style={{ ...styles.style, ...props.style }}
    >
      {renderImages(chat.attachments)}
    </Dropdown>
  );
};

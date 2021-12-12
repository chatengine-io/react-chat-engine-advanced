export interface PhotosSettingsStyles {
  style?: React.CSSProperties;
  imageWrapperStyle?: React.CSSProperties;
  imagePaddingStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export const styles: PhotosSettingsStyles = {
  style: {},
  imageWrapperStyle: {
    position: 'relative',
    width: '33.3%',
    display: 'inline-block',
    cursor: 'pointer',
  },
  imagePaddingStyle: { paddingTop: '100%' },
  imageStyle: {
    top: '0px',
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover',
    padding: '0px',
    borderRadius: '0px',
  },
};

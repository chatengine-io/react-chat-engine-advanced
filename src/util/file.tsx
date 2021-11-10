const images = ['jpg', 'jpeg', 'png', 'gif', 'tiff'];

export const isImage = (fileName: string) => {
  const dotSplit = fileName.split('.');
  return (
    dotSplit.length > 0 &&
    images.indexOf(dotSplit[dotSplit.length - 1].toLowerCase()) !== -1
  );
};

export const getFileName = (fileUrl: string) => {
  const slashSplit = fileUrl.split('/');
  const nameAndHash = slashSplit[slashSplit.length - 1];
  return nameAndHash.split('?')[0];
};

export const isImageFromFilePath = (fileUrl: string) => {
  return isImage(getFileName(fileUrl));
};

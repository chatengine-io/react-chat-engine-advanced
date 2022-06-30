import { PhotosSettingsStyles } from './styles';

import { ChatObject } from '../../../../interfaces';

export interface PhotosSettingsProps extends PhotosSettingsStyles {
  chat?: ChatObject;
  renderPhotosSettings?: (
    props: PhotosSettingsProps
  ) => JSX.Element | Element | React.FC<PhotosSettingsProps>;
}

import { PhotosSettingsStyles } from './styles';

import { ChatObject } from '../../../../interfaces';

export interface Props extends PhotosSettingsStyles {
  chat?: ChatObject;
  renderPhotosSettings?: (props: Props) => React.FC<Props>;
}

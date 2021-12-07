import { PhotosSettingsStyles } from './styles';

import { ChatProps } from '../../../../interfaces';

export interface Props extends PhotosSettingsStyles {
  chat?: ChatProps;
  renderPhotosSettings?: (props: Props) => React.FC<Props>;
}

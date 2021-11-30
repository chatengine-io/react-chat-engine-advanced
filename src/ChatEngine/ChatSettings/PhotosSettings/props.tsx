import { PhotosSettingsStyles } from './styles';

import { ChatProps } from '../../../util/interfaces';

export interface Props extends PhotosSettingsStyles {
  chat?: ChatProps;
  renderPhotosSettings?: (props: Props) => React.FC<Props>;
}

import { WelcomeGifStyles } from './styles';

export interface Props extends WelcomeGifStyles {
  renderWelcomeGif?: (props: Props) => React.FC<Props>;
}

import { WelcomeGifStyles } from './styles';

export interface Props extends WelcomeGifStyles {
  renderWelcomeGif?: (props: Props) => JSX.Element | Element | React.FC<Props>;
}

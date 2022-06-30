import { WelcomeGifStyles } from './styles';

export interface WelcomeGifProps extends WelcomeGifStyles {
  renderWelcomeGif?: (
    props: WelcomeGifProps
  ) => JSX.Element | Element | React.FC<WelcomeGifProps>;
}

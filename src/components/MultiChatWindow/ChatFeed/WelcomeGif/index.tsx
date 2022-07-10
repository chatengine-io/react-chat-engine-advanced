import React from 'react';
import { WelcomeGifProps } from './props';
import { styles } from './styles';

export const WelcomeGif: React.FC<WelcomeGifProps> = (
  props: WelcomeGifProps
) => {
  if (props.renderWelcomeGif) {
    return <>{props.renderWelcomeGif(props)}</>;
  }
  return (
    <div
      className="ce-ice-breaker-wrapper"
      style={{ ...styles.style, ...props.style }}
    >
      <img
        className="ce-ice-breaker-gif"
        style={{ ...styles.gifStyle, ...props.gifStyle }}
        src="https://chat-engine-assets.s3.amazonaws.com/welcome_gifs/peace.gif"
        alt="chat-engine-ice-breaker"
      />

      <div
        className="ce-ice-breaker-text"
        style={{ ...styles.textStyle, ...props.textStyle }}
      >
        No messages here yet...
      </div>
    </div>
  );
};

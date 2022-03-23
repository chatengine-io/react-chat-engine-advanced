import React from 'react';
import { Props } from './props';
import { styles } from './styles';

export const WelcomeGif: React.FC<Props> = (props: Props) => {
  if (props.renderWelcomeGif) {
    return <>{props.renderWelcomeGif(props)}</>;
  }
  return (
    <div style={{ ...styles.style, ...props.style }}>
      <img
        id="ce-ice-breaker-gif"
        style={{ ...styles.gifStyle, ...props.gifStyle }}
        src="https://chat-engine-assets.s3.amazonaws.com/welcome_gifs/peace.gif"
        alt="chat-engine-ice-breaker"
      />

      <div style={{ ...styles.textStyle, ...props.textStyle }}>
        No messages here yet...
      </div>
    </div>
  );
};

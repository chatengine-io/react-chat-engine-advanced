import React, { useState } from 'react';
import { styles } from './styles';
import { Props } from './props';

export const Dropdown: React.FC<Props> = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div style={{ ...styles.style, ...props.style }}>
      <div
        id={props.id}
        className={props.className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setSelected(!selected)}
        style={{
          ...styles.barStyle,
          ...(hovered && styles.hoveredStyle),
          ...props.barStyle,
          ...(hovered && props.hoveredStyle),
        }}
      >
        {props.label}

        <svg
          style={{
            ...styles.iconStyle,
            ...(selected
              ? { transform: `rotate(-90deg)` }
              : { transform: `rotate(0deg)` }),
            ...props.iconStyle,
          }}
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="left"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      </div>

      <div
        style={{
          ...styles.bodyStyle,
          ...(selected && styles.selectedStyle),
          ...props.bodyStyle,
          ...(selected && props.selectedStyle),
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

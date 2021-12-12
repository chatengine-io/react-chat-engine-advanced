import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { Props } from './props';
import { styles, FileStyles } from './styles';

import { getFileName } from '../../util/file';
import { Theme } from '../../ThemeProvider/props';

export const File: React.FC<Props> = (props: Props) => {
  const themeOrNull: Theme | null = useContext(ThemeContext);

  if (themeOrNull == null) {
    return <ThemedFile {...props} />;
  }

  const theme: Theme = themeOrNull as Theme;

  // map theme to file styles
  const fileStyles: FileStyles = {
    style: {
      color: theme.palette.primary.main,
    },
    hoveredStyle: {
      color: theme.palette.error.main,
    },
  };

  return (
    <ThemedFile
      {...props}
      style={fileStyles.style}
      hoveredStyle={fileStyles.hoveredStyle}
    />
  );
};

const urlOrLoading = (url: string | undefined) => {
  return url ? getFileName(url) : 'Loading...';
};

export const ThemedFile: React.FC<Props> = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => props.url && window.open(props.url)}
      style={{
        // Default
        ...styles.style,
        ...(!props.url ? { border: '1px solid grey' } : {}),
        // State
        ...(isHovered ? styles.hoveredStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(isHovered ? props.hoveredStyle : {}),
      }}
    >
      {props.fileName ? props.fileName : `📄 ${urlOrLoading(props.url)}`}
    </div>
  );
};

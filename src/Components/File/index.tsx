import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { Props } from './props';
import { styles, FileStyles } from './styles';

import { getFileName } from '../../util/file';
import { Theme } from '../ThemeProvider/props';

export const File: React.FC<Props> = (props: Props) => {
  const themeOrNull: Theme | null = useContext(ThemeContext);

  if (themeOrNull == null) {
    return <ThemedFile {...props} />;
  }

  const theme: Theme = themeOrNull as Theme;

  // map theme to file styles
  const fileStyles: FileStyles = {
    ...styles,
    style: {
      ...styles.style,
      color: theme.palette.primary.main,
    },
    hoveredStyle: {
      ...styles.style,
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

const ThemedFile: React.FC<Props> = ({
  url,
  fileName,
  style = {},
  hoveredStyle = {},
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const urlOrLoading = () => {
    return url ? getFileName(url) : 'Loading...';
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => url && window.open(url)}
      style={{
        // Default
        ...styles.style,
        ...(!url ? { border: '1px solid grey' } : {}),
        // State
        ...(isHovered ? styles.hoveredStyle : {}),
        // Props
        ...style,
        // Props + State
        ...(isHovered ? hoveredStyle : {}),
        // Docs: No Style prop for isLoading.
        // They can set isLoading and style accordingly.
      }}
    >
      {fileName ? fileName : `📄 ${urlOrLoading()}`}
    </div>
  );
};

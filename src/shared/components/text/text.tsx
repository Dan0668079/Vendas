import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { ContainerText } from './text.style';
import { textTypes } from './text.types';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ margin, type, color, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_ITALIC:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_ITALIC:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.SUB_TITLE_REGULAR:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_ITALIC:
      case textTypes.BUTTON_LIGHT:
      case textTypes.BUTTON_REGULAR:
        return '18px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_ITALIC:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_ITALIC:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.BUTTON_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_LIGHT:
      case textTypes.BUTTON_LIGHT:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_REGULAR:
      case textTypes.BUTTON_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <ContainerText
      customMargin={margin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...props}
    />
  );
};

export default Text;

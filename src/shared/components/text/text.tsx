import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { ContainerText } from './text.style';
import { textTypes } from './text.types';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ type, color, ...props }: TextProps) => {
  const handleSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);

  return <ContainerText color={color} {...props} />;
};

export default Text;

import React from 'react';
import { TextInputProps } from 'react-native';

import { colors } from '../../themes/colors';
import { DisplayFlexColumn } from '../globalStyles/blobalView.style';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
import { ContainerInput } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
} // ? para ter acesso a todas props do imput

const Input = ({ title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin={'0px 0px 4px 10px'}
          color={colors.color.red600}
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
        >
          {title}
        </Text>
      )}
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;

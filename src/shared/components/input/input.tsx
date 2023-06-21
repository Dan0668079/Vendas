import React from 'react';
import { TextInputProps } from 'react-native';

import { colors } from '../../themes/colors';
import { DisplayFlexColumn } from '../globalStyles/blobalView.style';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
import { ContainerInput } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
} // ? para ter acesso a todas props do imput

const Input = ({ errorMessage, title, ...props }: InputProps) => {
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
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          margin={'0px 0px 0px 10px'}
          color={colors.color.red100}
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;

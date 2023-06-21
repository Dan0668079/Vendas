import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { colors } from '../../themes/colors';
import { DisplayFlexColumn } from '../globalStyles/blobalView.style';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
import { ContainerInput, IconEye } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
} // ? para ter acesso a todas props do imput

const Input = ({ margin, secureTextEntry, errorMessage, title, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);
  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin={'0px 0px 4px 10px'}
          color={colors.color.red600}
          type={textTypes.PARAGRAPH_SMALL_REGULAR}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          {...props}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
          />
        )}
      </View>

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

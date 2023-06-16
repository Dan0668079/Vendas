import React from 'react';
import { TextInputProps } from 'react-native/types';

import { ContainerInput } from './input.style';

type InputProps = TextInputProps; // ? para ter acesso a todas props do imput

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;

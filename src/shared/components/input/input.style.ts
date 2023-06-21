import styled from 'styled-components/native';

import { colors } from '../../themes/colors';

interface ContainerInputProps {
  isError: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  height: 48px;
  width: 100%;
  padding: 16px;
  background-color: ${colors.color.white500};
  color: ${colors.color.black};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props: ContainerInputProps) =>
    props.isError ? colors.color.orange500 : colors.color.red600};
`;

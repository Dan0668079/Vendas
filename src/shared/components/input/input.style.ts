import styled from 'styled-components/native';

import { colors } from '../../themes/colors';
import { Icon } from '../icon/icon';

interface ContainerInputProps {
  isError: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  height: 48px;
  width: 100%;
  padding: 16px;
  background-color: ${colors.color.white500};
  color: ${colors.color.black};
  border-radius: 8px;

  padding-right: ${(props: ContainerInputProps) => (props.hasSecureTextEntry ? '50px' : '16px')};

  border-width: 1px;
  border-color: ${(props: ContainerInputProps) =>
    props.isError ? colors.color.orange500 : colors.color.red600};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

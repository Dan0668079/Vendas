import styled from 'styled-components/native';

import { colors } from '../../themes/colors';

export const ContainerInput = styled.TextInput`
  height: 48px;
  width: 100%;
  padding: 16px;
  background-color: ${colors.color.white500};
  color: ${colors.color.black};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.color.red600};
`;

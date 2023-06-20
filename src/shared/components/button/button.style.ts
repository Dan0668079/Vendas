import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { colors } from '../../themes/colors';

interface ButtonContainerProps {
  margin?: number;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}px;` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin}px;` : '')}
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${colors.color.primary};
`;

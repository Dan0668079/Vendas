import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: number;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')}

  background-color: blue;
`;

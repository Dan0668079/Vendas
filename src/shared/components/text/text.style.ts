import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  customMargin?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: ContainerTextProps) => (props.color ? `color: ${props.color};` : '')};
  ${(props: ContainerTextProps) => (props.customMargin ? `margin: ${props.customMargin};` : '')};

  padding-top: 3px;
  font-family: ${(props: ContainerTextProps) => props.fontFamily};
  font-size: ${(props: ContainerTextProps) => props.fontSize};
`;

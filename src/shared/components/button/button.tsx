import { TouchableOpacityProps } from 'react-native';

import { colors } from '../../themes/colors';
import Text from '../text/text';
// import { textTypes } from '../text/text.types';
import { ButtonContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text color={colors.color.white500}>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;

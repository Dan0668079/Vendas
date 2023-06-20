import { TouchableOpacityProps } from 'react-native';

import { colors } from '../../themes/colors';
import { theme } from '../../themes/theme';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
// import { textTypes } from '../text/text.types';
import { ButtonContainer, ButtonSecondary, GradientButton } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
  type?: string;
}

const Button = ({ type, title, margin, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_BOLD} color={colors.color.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <GradientButton colors={['#FF00E6', '#BD7BFF']}>
            <Text type={textTypes.BUTTON_BOLD} color={colors.color.white500}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;

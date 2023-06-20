import { TouchableOpacityProps } from 'react-native';

import { colors } from '../../themes/colors';
import { theme } from '../../themes/theme';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
// import { textTypes } from '../text/text.types';
import {
  ActivityIndicatorButton,
  ButtonContainer,
  ButtonDisabled,
  ButtonSecondary,
  GradientButton,
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ disabled, loading, type, title, margin, onPress, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicatorButton color={colors.color.white100} />}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(colors.color.white200)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(colors.color.primary)}
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton colors={['#FF00E6', '#BD7BFF']}>
            {renderText(colors.color.white100)}
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;

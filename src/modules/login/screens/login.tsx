import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { colors } from '../../../shared/themes/colors';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text color={colors.color.viridian500}>Login</Text>
        <Input
          // errorMessage="Usuário ou senha inválidos"
          placeholder="Digite o seu e-mail"
          title="E-mail"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin={16}
          title="ENTRAR"
          //? loading
          //! disabled
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;

import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import { Icon } from '../../../shared/components/icon/icon';
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
        <Icon name="home3" color="pink" size={32} />
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

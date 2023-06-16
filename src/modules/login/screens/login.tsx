import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { ContainerLogin } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input placeholder="E-mail" />
        <Button margin={16} title="Entrar" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;

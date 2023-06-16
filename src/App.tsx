import { SafeAreaView } from 'react-native';

// import Example from './Example'; // Certifique-se de que o arquivo Example.tsx existe
import Login from './modules/login';
// import * as Styles from './Style'; // Certifique-se de que o arquivo Style.ts existe
// import { useApp } from './useApp';

const App = () => {
  // const { handleOnpress, value } = useApp();

  return (
    <SafeAreaView>
      <Login />
      {/* <Example text="Hello World!">Título</Example>
      <Example text="Olha ele aí!" />
      <Example />
      <Text>{value}</Text>
      <Styles.TextNew>NOVO TESTE</Styles.TextNew>
      <Styles.StyledButton onPress={handleOnpress}>
        <Styles.ButtonText>Pressione-me</Styles.ButtonText>
      </Styles.StyledButton> */}
    </SafeAreaView>
  );
};

export default App;

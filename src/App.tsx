import { useState } from 'react';
import { SafeAreaView } from 'react-native';

// import Example from './Example'; // Certifique-se de que o arquivo Example.tsx existe
import Login from './modules/login';
import Button from './shared/components/button/button';
import Modal from './shared/components/modal/modal';
// import * as Styles from './Style'; // Certifique-se de que o arquivo Style.ts existe
// import { useApp } from './useApp';

const App = () => {
  // const { handleOnpress, value } = useApp();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView>
        <Modal
          onCloseModal={() => setModalVisible(false)}
          visible={modalVisible}
          text="Texto teste"
          title="Titulo Teste"
        />
        <Button title="open" onPress={() => setModalVisible(true)} />
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
    </>
  );
};

export default App;

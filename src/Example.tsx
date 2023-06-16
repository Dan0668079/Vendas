/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

interface ExampleProps {
  text?: string;
  children?: string;
}

const Example = ({ children, text }: ExampleProps) => {
  //!Ou
  // const Example = (props: ExampleProps) => {
  //     const { children, text } = props;

  //   const children = props.children;
  //   const text = props.text;

  const [buttonText, setButtonText] = useState('CLICAR');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    console.log('passou aqui');
  }, [buttonText]);

  const handleOnPress = () => {
    setButtonText('CLICADO');
    setNewText('NOVO STATE');
  };

  return (
    <View>
      <Text style={{ color: 'black' }}>{children}</Text>
      <Text style={{ color: 'green' }}>{newText || text}</Text>

      <Button onPress={handleOnPress} title={buttonText} />
    </View>
  );
};

export default Example;

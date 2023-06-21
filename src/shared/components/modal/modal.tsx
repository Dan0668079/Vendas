import { useState } from 'react';
import {
  Alert,
  Modal as ModalReact,
  ModalProps as ModalPropsReact,
  Pressable,
  Text,
  View,
} from 'react-native';

import { ContainerModal } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModalReact
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          onCloseModal();
        }}
        {...props}
      >
        <ContainerModal>
          <View>
            <Text>{title}</Text>
            <Text>{text}</Text>
            <Pressable onPress={onCloseModal}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </ContainerModal>
      </ModalReact>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </>
  );
};

export default Modal;

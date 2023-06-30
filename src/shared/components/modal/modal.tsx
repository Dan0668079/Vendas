// import { useState } from 'react';
import {
  Alert,
  Modal as ModalReact,
  ModalProps as ModalPropsReact,
  // Pressable,
  // View,
} from 'react-native';

import { colors } from '../../themes/colors';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/text.types';
import { ContainerModal, IconCloseModal } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModalReact
        animationType="slide"
        transparent={true}
        // visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          onCloseModal();
        }}
        {...props}
      >
        <ContainerModal>
          <Text type={textTypes.BUTTON_REGULAR} color={colors.color.primary}>
            {title}
          </Text>
          <Text>{text}</Text>
          <Button title="close" onPress={onCloseModal} />
          <IconCloseModal name="cross" onPress={onCloseModal} />
        </ContainerModal>
      </ModalReact>
    </>
  );
};

export default Modal;

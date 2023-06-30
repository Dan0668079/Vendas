import styled from 'styled-components/native';

import { colors } from '../../themes/colors';
import { Icon } from '../icon/icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${colors.color.white};
  height: 225px;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;
  shadow-color: ${colors.color.black};
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 0.2;
  shadow-radius: 1px;
  elevation: 10;
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;

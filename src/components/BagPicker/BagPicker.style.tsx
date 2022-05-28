import styled from "styled-components/native";
import { primaryColor } from "../../utils/colors";

export const BagsContainer = styled.View`
  padding: 48px 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
`;
export const BagPickerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BagsTitle = styled.Text`
  font-size: 20px;
`;

export const PickerButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${primaryColor};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 4px;
`;

export const PickerText = styled.Text`
  font-size: 20px;
  height: 30px;
`;

export const NumberOfProducts = styled.Text`
  margin: 0 28px;
`;

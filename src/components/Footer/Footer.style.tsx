import styled from "styled-components/native";
import { errorColor, primaryColor } from "../../utils/colors";

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-top-color: black;
  border-top-width: 1px;
`;

export const Total = styled.View``;

export const TotalBags = styled.Text`
  font-size: 14px;
  line-height: 16px;
`;

export const TotalPrice = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

export const FooterButton = styled.TouchableOpacity`
  padding: 10px 40px;
  border-radius: 4px;
  background-color: ${({ bookingFailed }: { bookingFailed: boolean }) =>
    bookingFailed ? errorColor : primaryColor};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const FooterButtonText = styled.Text`
  font-size: 20px;
`;

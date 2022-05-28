import styled from "styled-components/native";

export const BookingLoadingContainer = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const BookingLoadingText = styled.Text`
  color: white;
  font-size: 28px;
  line-height: 33px;
  font-weight: 700;
  text-align: center;
`;

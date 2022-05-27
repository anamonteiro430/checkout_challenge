import styled from "styled-components/native";

export const BookingLoadingContainer = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid;
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookingLoadingText = styled.Text`
  background-color: white;
`;

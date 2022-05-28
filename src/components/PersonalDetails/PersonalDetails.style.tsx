import styled from "styled-components/native";
import { accentColor } from "../../utils/colors";

export const PersonalDetailsContainer = styled.View`
  padding: 30px 79px 30px 35px;
`;

export const PersonalDetailsTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 14px;
`;

export const PersonalDetailsLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 14px;
  font-weight: 300;
  line-height: 16px;
  margin-bottom: 7px;
`;

export const BagsContainer = styled.View``;

export const PersonalDetailsInput = styled.TextInput`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 7px 10px;
`;

export const PersonalDetailsLocked = styled.View`
  padding: 50px 17px;
`;

export const PersonalDetailsLockedContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 4px 30px 20px;
  background-color: ${accentColor};
`;

export const PersonalDetailsLockedText = styled.Text`
  font-size: 20px;
  line-height: 23px;
`;

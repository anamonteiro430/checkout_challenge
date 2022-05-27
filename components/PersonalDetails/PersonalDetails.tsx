import React, { useContext } from "react";
import { Button, TextInput } from "react-native";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  PersonalDetailsContainer,
  PersonalDetailsLocked,
} from "./PersonalDetails.style";

const PersonalDetails = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;
  const { isPersonalDetailsLocked } = checkoutState;

  if (isPersonalDetailsLocked) {
    return (
      <PersonalDetailsLocked>
        <Button
          title={"change"}
          onPress={() => checkoutDispatch({ type: "UNLOCK_PERSONAL_DETAILS" })}
        />
      </PersonalDetailsLocked>
    );
  } else
    return (
      <PersonalDetailsContainer>
        <TextInput
          onChangeText={(name) =>
            checkoutDispatch({ type: "CHANGING_INFO", payload: { name } })
          }
          value={checkoutState.userInfo.name}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          onChangeText={(email) =>
            checkoutDispatch({ type: "CHANGING_INFO", payload: { email } })
          }
          value={checkoutState.userInfo.email}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </PersonalDetailsContainer>
    );
};

export default PersonalDetails;

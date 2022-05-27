import React, { useContext } from "react";
import { TextInput } from "react-native";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import { PaymentInfoContainer } from "./PaymentInfo.style";

const PaymentInfo = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;

  return (
    <PaymentInfoContainer>
      <TextInput
        onChangeText={(card) =>
          checkoutDispatch({ type: "CHANGING_INFO", payload: { card } })
        }
        value={checkoutState.userInfo.card}
        placeholder="placeholder"
      />
    </PaymentInfoContainer>
  );
};

export default PaymentInfo;

import React, { useContext } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  PaymentInfoContainer,
  PaymentInfoInput,
  PaymentInfoLabel,
  PaymentInfoTitle,
} from "./PaymentInfo.style";

const PaymentInfo = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;

  return (
    <PaymentInfoContainer>
      <PaymentInfoTitle>Payment Information</PaymentInfoTitle>
      <PaymentInfoLabel>Card Details</PaymentInfoLabel>

      <PaymentInfoInput
        onChangeText={(card) =>
          /\d/.test(card) &&
          checkoutDispatch({ type: "CHANGING_INFO", payload: { card } })
        }
        value={checkoutState.userInfo.card}
        keyboardType="numeric"
        maxLength={10}
      />
    </PaymentInfoContainer>
  );
};

export default PaymentInfo;

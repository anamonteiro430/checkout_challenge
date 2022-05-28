import React, { useContext, useEffect } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  SuccessScreenContainer,
  SuccessScreenText,
} from "./SuccessScreen.style";

const SuccessScreen = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutDispatch } = checkoutContext;

  useEffect(() => {
    //stay on screen for a few seconds then go back
    setTimeout(() => {
      checkoutDispatch({ type: "GO_BACK_TO_CHECKOUT" });
    }, 2500);
  }, []);

  return (
    <SuccessScreenContainer>
      <SuccessScreenText>Booking{"\n"} Placed!</SuccessScreenText>
    </SuccessScreenContainer>
  );
};

export default SuccessScreen;

import React, { useContext } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import { isFormFilled } from "../../utils/functions";
import {
  FooterButton,
  FooterButtonText,
  FooterContainer,
  Total,
  TotalBags,
  TotalPrice,
} from "./Footer.style";

const Footer = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;
  const { products, sumPriceProducts, states, userInfo, steps } = checkoutState;

  const handlePress = () => {
    checkoutDispatch({
      type: states.canBook ? "BOOK" : "GO_TO_NEXT_STEP",
    });
    //wait few seconds then fail or not
    if (states.canBook) {
      setTimeout(() => {
        let shouldFail = Math.random() < 0.5;

        if (shouldFail) {
          return checkoutDispatch({ type: "BOOKING_FAIL" });
        } else {
          checkoutDispatch({ type: "BOOKING_SUCCESS" });
          //GO TO SUCCESS SCREEN - booking placed
        }
      }, 2000);
    }
  };

  const isFooterButtonDisabled = () => {
    //Is disabled if personal info is not filled

    let personalDetailsFilled = isFormFilled({
      name: userInfo.name,
      email: userInfo.email,
    });

    let paymentDetailsFilled = isFormFilled({
      card: userInfo.card,
    });

    //Personal Information not filled
    if (!personalDetailsFilled && steps.showPersonalDetails) {
      return true;
    }

    //Payment Information not filled
    if (!paymentDetailsFilled && steps.showPaymentInformation) {
      return true;
    }
  };

  return (
    <FooterContainer>
      <Total>
        <TotalBags>
          {products.length} {products.length > 1 ? "bags" : "bag"}
        </TotalBags>
        <TotalPrice>${sumPriceProducts.toFixed(2)}</TotalPrice>
      </Total>
      <FooterButton
        bookingFailed={states.bookingFailed}
        onPress={() => handlePress()}
        disabled={isFooterButtonDisabled()}
      >
        <FooterButtonText>
          {states.bookingFailed ? "Retry" : states.canBook ? "Book" : "Next"}
        </FooterButtonText>
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;

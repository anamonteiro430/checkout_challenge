import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import { FooterContainer, Total } from "./Footer.style";

const Footer = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState, checkoutDispatch } = checkoutContext;
  const { products, sumPriceProducts, canBook, bookingFailed } = checkoutState;

  const handlePress = () => {
    checkoutDispatch({
      type: canBook ? "BOOK" : "GO_TO_NEXT_STEP",
    });
    //wait few seconds then fail or not
    if (canBook) {
      setTimeout(() => {
        let shouldFail = Math.random() < 0.5;
        console.log("will fail", shouldFail);
        if (shouldFail) {
          return checkoutDispatch({ type: "BOOKING_FAIL" });
        } else {
          checkoutDispatch({ type: "BOOKING_SUCCESS" });
          //GO TO SUCCESS SCREEN - booking placed
        }
      }, 2000);
    }
  };

  return (
    <FooterContainer>
      <Total>
        <Text>
          {products.length} {products.length > 1 ? "bags" : "bag"}
        </Text>
        <Text>{sumPriceProducts}</Text>
      </Total>
      <Button
        title={bookingFailed ? "Retry" : canBook ? "Book" : "Next"}
        onPress={() => handlePress()}
      />
    </FooterContainer>
  );
};

export default Footer;

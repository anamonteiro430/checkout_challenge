import React, { useContext } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  BagPickerContainer,
  BagsContainer,
  BagsTitle,
  NumberOfProducts,
  PickerButton,
  PickerText,
} from "./BagPicker.style";

const BagPicker = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState } = checkoutContext;
  const { products } = checkoutState;

  return (
    <BagsContainer>
      <BagsTitle>Number of bags</BagsTitle>
      <BagPickerContainer>
        <PickerButton
          disabled={products.length === 1}
          onPress={() =>
            checkoutContext.checkoutDispatch({ type: "REMOVE_BAG" })
          }
        >
          <PickerText>-</PickerText>
        </PickerButton>
        <NumberOfProducts>{products.length}</NumberOfProducts>
        <PickerButton
          onPress={() => checkoutContext.checkoutDispatch({ type: "ADD_BAG" })}
        >
          <PickerText>+</PickerText>
        </PickerButton>
      </BagPickerContainer>
    </BagsContainer>
  );
};

export default BagPicker;

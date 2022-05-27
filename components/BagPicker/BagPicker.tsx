import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import {
  BagPickerContainer,
  BagsContainer,
  BagPickerSubtitle,
  BagPickerTitle,
} from "./BagPicker.style";

const BagPicker = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState } = checkoutContext;
  const { products } = checkoutState;

  return (
    <BagPickerContainer>
      <BagPickerSubtitle>Booking storage at:</BagPickerSubtitle>
      <BagPickerTitle>Cody's Cookie Store</BagPickerTitle>
      <BagsContainer>
        <Text>Number of bags</Text>
        <Button
          title="-"
          onPress={() =>
            checkoutContext.checkoutDispatch({ type: "REMOVE_BAG" })
          }
        ></Button>
        <Text>{products.length}</Text>
        <Button
          title="+"
          onPress={() => checkoutContext.checkoutDispatch({ type: "ADD_BAG" })}
        ></Button>
      </BagsContainer>
    </BagPickerContainer>
  );
};

export default BagPicker;

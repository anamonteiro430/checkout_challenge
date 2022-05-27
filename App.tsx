import React, { useEffect, useReducer } from "react";
import {
  CheckoutContext,
  initialState,
  reducer,
} from "./reducers/checkoutReducer";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import SuccessScreen from "./screens/SuccessScreen/SuccessScreen";
import { isFormFilled } from "./utils/functions";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isBooking } = state;

  useEffect(() => {
    if (!isBooking) {
      if (isFormFilled(state.userInfo)) {
        dispatch({ type: "CAN_BOOK" });
      } else {
        dispatch({ type: "CANT_BOOK" });
      }
    }
  }, [state.userInfo]);

  return (
    <CheckoutContext.Provider
      value={{ checkoutState: state, checkoutDispatch: dispatch }}
    >
      <CheckoutScreen />
      <SuccessScreen />
    </CheckoutContext.Provider>
  );
}

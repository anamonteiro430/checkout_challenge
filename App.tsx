import React, { useEffect, useReducer } from "react";
import CheckoutScreen from "./src/screens/CheckoutScreen/CheckoutScreen";
import SuccessScreen from "./src/screens/SuccessScreen/SuccessScreen";
import { isFormFilled } from "./src/utils/functions";
import {
  CheckoutContext,
  initialState,
  reducer,
} from "./src/reducers/checkoutReducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { states, steps } = state;

  useEffect(() => {
    if (!states.isBooking) {
      dispatch({ type: "CAN_BOOK", payload: isFormFilled(state.userInfo) });
    }
  }, [state.userInfo]);

  return (
    <CheckoutContext.Provider
      value={{ checkoutState: state, checkoutDispatch: dispatch }}
    >
      {steps.showSuccessPage ? <SuccessScreen /> : <CheckoutScreen />}
    </CheckoutContext.Provider>
  );
}

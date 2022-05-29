import React from "react";
import { Product, State } from "../utils/types";

export const initialState: State = {
  products: [{ id: 0, price: 5.9 }],
  userInfo: {
    name: "",
    email: "",
    card: "",
  },
  sumPriceProducts: 5.9,
  steps: {
    showPersonalDetails: false,
    showPaymentInformation: false,
    showSuccessPage: false,
  },
  states: {
    isPersonalDetailsLocked: false,
    canBook: false,
    isBooking: false,
    bookingFailed: false,
  },
};

export const CheckoutContext = React.createContext({
  checkoutDispatch: ({}: { type: string; payload?: any }) => {
    return;
  },
  checkoutState: initialState,
});

const calculateCurrentPrice = (products: Product[]) => {
  return products.reduce((prev, cur) => {
    return prev + cur.price;
  }, 0);
};

export function reducer(state: State, action: { type: string; payload?: any }) {
  switch (action.type) {
    //Add bag, increment luggage and total price
    case "ADD_BAG":
      let bag = state.products.slice(-1)[0];

      let updatedProducts = [...state.products, { ...bag, id: bag.id + 1 }];

      return {
        ...state,
        products: updatedProducts,
        sumPriceProducts: calculateCurrentPrice(updatedProducts),
      };

    //Remove bag, decrement luggage and total price
    case "REMOVE_BAG":
      let bags = state.products;
      bags.pop();
      return {
        ...state,
        products: bags,
        sumPriceProducts: calculateCurrentPrice(bags),
      };

    //Handle footer button actions
    case "GO_TO_NEXT_STEP":
      //If Personal Details Component is already on screen
      //Lock it and render the next step, Payment Info on screen
      if (state.steps.showPersonalDetails) {
        return {
          ...state,
          states: {
            ...state.states,
            isPersonalDetailsLocked: true,
          },
          steps: {
            ...state.steps,
            showPaymentInformation: true,
          },
        };
      }
      //Or show it
      return { ...state, steps: { ...state.steps, showPersonalDetails: true } };

    //User is already on Payment Info and wants to unlock Personal Details
    case "UNLOCK_PERSONAL_DETAILS":
      return {
        ...state,
        steps: { ...state.steps, showPersonalDetails: true },
        states: {
          ...state.states,
          isPersonalDetailsLocked: false,
        },
      };

    //User is Changing personal or payment information
    case "CHANGING_INFO":
      let entry: any = Object.entries(action.payload)[0];
      let [key, value] = entry;

      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [key]: value,
        },
      };

    //Form is filled, user can finally book
    case "CAN_BOOK":
      let canBook = action.payload;

      return {
        ...state,
        states: {
          ...state.states,
          canBook,
        },
      };

    //Trigger book
    case "BOOK":
      return {
        ...state,
        states: {
          ...state.states,
          isBooking: true,
        },
      };

    //Booking failed
    case "BOOKING_FAIL":
      return {
        ...state,
        states: {
          ...state.states,
          isBooking: false,
          bookingFailed: true,
        },
      };

    //Booking went through. Success!
    case "BOOKING_SUCCESS":
      return {
        ...state,
        states: {
          ...state.states,
          isBooking: false,
          bookingFailed: false,
        },
        steps: {
          ...state.steps,
          showSuccessPage: true,
        },
      };

    //Go back to checkout
    case "GO_BACK_TO_CHECKOUT":
      return initialState;
    default:
      throw new Error();
  }
}

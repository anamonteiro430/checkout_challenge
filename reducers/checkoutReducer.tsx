import React from "react";
import { State } from "../utils/types";

export const initialState: State = {
  products: [{ id: 0, price: 5.9 }],
  userInfo: {
    name: "",
    email: "",
    card: "",
  },
  sumPriceProducts: 5.9,
  showPersonalDetails: false,
  showPaymentInformation: false,
  isPersonalDetailsLocked: false,
  canBook: false,
  isBooking: false,
  bookingFailed: false,
};

export const CheckoutContext = React.createContext({
  checkoutDispatch: ({}) => {
    return;
  },
  checkoutState: initialState,
});

export function reducer(state: State, action: { type: string; payload: any }) {
  switch (action.type) {
    case "ADD_BAG":
      let bag = state.products.slice(-1)[0];

      let updatedProducts = [...state.products, { ...bag, id: bag.id + 1 }];
      let test = updatedProducts.reduce((prev, cur) => {
        return prev + cur.price;
      }, 0);

      return {
        ...state,
        products: updatedProducts,
        counter: 2,
        sumPriceProducts: test,
      };
    case "REMOVE_BAG":
      let bags = state.products;
      bags.pop();
      return { ...state, products: bags };

    case "GO_TO_NEXT_STEP":
      if (state.showPersonalDetails) {
        return {
          ...state,
          isPersonalDetailsLocked: true,
          showPaymentInformation: true,
        };
      }

      return { ...state, showPersonalDetails: true };
    case "UNLOCK_PERSONAL_DETAILS":
      return {
        ...state,
        showPersonalDetails: true,
        isPersonalDetailsLocked: false,
      };

    case "CHANGING_INFO":
      let entry = Object.entries(action.payload)[0];

      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [entry[0]]: entry[1],
        },
      };

    case "CAN_BOOK":
      return {
        ...state,
        canBook: true,
      };

    case "CANT_BOOK":
      return {
        ...state,
        canBook: false,
      };
    case "BOOK":
      return {
        ...state,
        isBooking: true,
      };
    case "BOOKING_FAIL":
      return {
        ...state,
        isBooking: false,
        bookingFailed: true,
      };
    case "BOOKING_SUCCESS":
      return {
        ...state,
        isBooking: false,
        bookingFailed: false,
      };
    default:
      throw new Error();
  }
}

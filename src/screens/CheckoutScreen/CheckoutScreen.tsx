import React, { useContext } from "react";
import { CheckoutContext } from "../../reducers/checkoutReducer";
import BagPicker from "../../components/BagPicker/BagPicker";
import BookingLoading from "../../components/BookingLoading/BookingLoading";
import Footer from "../../components/Footer/Footer";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutSubtitle,
  CheckoutTitle,
} from "./CheckoutScreen.style";

const CheckoutScreen = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState } = checkoutContext;
  const { steps, states } = checkoutState;

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutSubtitle>Booking storage at:</CheckoutSubtitle>
        <CheckoutTitle>Cody's Cookie Store</CheckoutTitle>
      </CheckoutHeader>
      <BagPicker />
      {steps.showPersonalDetails && <PersonalDetails />}
      {steps.showPaymentInformation && <PaymentInfo />}
      <Footer />
      {states.isBooking && <BookingLoading />}
    </CheckoutContainer>
  );
};

export default CheckoutScreen;

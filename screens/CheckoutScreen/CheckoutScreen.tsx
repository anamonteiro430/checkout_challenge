import React, { useContext } from "react";
import { View } from "react-native";
import BagPicker from "../../components/BagPicker/BagPicker";
import BookingLoading from "../../components/BookingLoading/BookingLoading";
import Footer from "../../components/Footer/Footer";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails";
import { CheckoutContext } from "../../reducers/checkoutReducer";

const CheckoutScreen = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { checkoutState } = checkoutContext;
  const { showPersonalDetails, showPaymentInformation, isBooking } =
    checkoutState;

  return (
    <View>
      <BagPicker />
      {showPersonalDetails && <PersonalDetails />}
      {showPaymentInformation && <PaymentInfo />}
      <Footer />
      {isBooking && <BookingLoading />}
    </View>
  );
};

export default CheckoutScreen;

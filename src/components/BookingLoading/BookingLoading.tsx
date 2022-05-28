import React from "react";
import {
  BookingLoadingContainer,
  BookingLoadingText,
} from "./BookingLoading.style";

const BookingLoading = () => {
  return (
    <BookingLoadingContainer>
      <BookingLoadingText>
        Placing
        {"\n"} Booking
        {"\n"}
        ...
      </BookingLoadingText>
    </BookingLoadingContainer>
  );
};

export default BookingLoading;

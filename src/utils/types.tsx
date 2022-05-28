export type State = {
  products: Product[];
  userInfo: UserInfo;
  sumPriceProducts: number;
  steps: {
    showPersonalDetails: boolean;
    showPaymentInformation: boolean;
    showSuccessPage: boolean;
  };
  states: {
    isPersonalDetailsLocked: boolean;
    canBook: boolean;
    isBooking: boolean;
    bookingFailed: boolean;
  };
};

export type Product = {
  id: number;
  price: number;
};

export type UserInfo = {
  name: string;
  email: string;
  card: string;
};

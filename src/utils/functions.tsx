export const isFormFilled = (userInfo: Object) => {
  return Object.values(userInfo).every((value: string) => value.length > 0);
};

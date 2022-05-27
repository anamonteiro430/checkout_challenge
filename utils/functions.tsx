import { UserInfo } from "./types";

export const isFormFilled = (userInfo: UserInfo) => {
  return Object.values(userInfo).every((value: string) => value.length > 0);
};

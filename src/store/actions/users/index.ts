import { USER_UPDATE, USER_RESET } from "../";

export const userUpdate = (user: any) => ({
  type: USER_UPDATE,
  payload: user,
});

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};
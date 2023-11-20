import { selector } from "recoil";
import { authState } from "../atoms/auth";

export const authSelector = selector({
  key: "AuthSelector",
  get: ({ get }) => {
    return get(authState);
  },
});

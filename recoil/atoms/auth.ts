import { Session } from "next-auth";
import { atom } from "recoil";

export const authState = atom<Session | null>({
  key: "authState",
  default: null,
});

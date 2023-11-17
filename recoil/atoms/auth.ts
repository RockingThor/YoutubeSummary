import { atom } from "recoil";

interface User {
  id: string;
  name: string;
  email: string;
}

export const authState = atom<User | null>({
  key: "authState",
  default: null,
});

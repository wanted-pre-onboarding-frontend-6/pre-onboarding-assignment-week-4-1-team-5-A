import { atom } from "recoil";

export const accountListAtom = atom<any>({
  key: "accountList", // 키는 consts를 통해 상수화
  default: {},
});

export const accountAtom = atom<any>({
  key: "account",
  default: {},
});

export default atom;

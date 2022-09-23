import { atom } from 'recoil';

export const userListAtom = atom<any>({
  key: 'userList', // 키는 consts를 통해 상수화
  default: {},
});

export const userAtom = atom<any>({
  key: 'user',
  default: {},
});

export default atom;

import { atom } from 'recoil';

export const typeState = atom({
  key: 'type',
  default: 'hello',
});

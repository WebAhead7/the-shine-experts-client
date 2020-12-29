import { atom } from 'recoil';

const token = atom({
  key: 'atom',
  default: '',
});

export { token };

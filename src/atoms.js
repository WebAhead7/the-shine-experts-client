import { atom } from 'recoil';

export const typeState = atom({
  key: 'type',
  default: 'hello',
});

export const appointmentState = atom({
  key: 'appointment',
  default: '',
});

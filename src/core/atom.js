import { atom } from 'recoil';

export const sendMoney = atom({
  key: 'sendMoney',
  default: 0,
});

export const sendAccount = atom({
  key: 'sendAccount',
  default: '',
});

export const sendingName = atom({
  key: 'sendingName',
  default: '',
});

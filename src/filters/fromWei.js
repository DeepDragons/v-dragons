import { utils } from 'web3/lib'

const { fromWei } = utils;

export default function (value, currency, toAdd) {
  let gwei = '900000000000';
  let wei = '100';

  if (+value <= wei) {
    value = fromWei(String(value), 'wei');
    if (currency !== 'none') {
      currency = 'WEI';
    }
  } else if (+value <= gwei) {
    value = fromWei(String(value), 'gwei');
    if (currency !== 'none') {
      currency = 'GWEI';
    }
  } else {
    value = fromWei(String(value), 'ether');
  }

  if (currency !== 'none') {
    value = `${value} ${currency || ''}`;
  }

  return value;
}

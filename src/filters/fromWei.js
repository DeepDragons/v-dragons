import { fromWei } from 'web3/lib/utils/utils'

export default function (value, currency) {
  let gwei = 900000000000;
  let wei = 100;

  if (+value <= wei) {
    value = fromWei(value, 'wei');
    currency = 'WEI';
  } else if (+value <= gwei) {
    value = fromWei(value, 'gwei');
    currency = 'GWEI';
    
  } else {
    value = fromWei(value, 'ether');
  }

  if (currency) {
    value = `${value} ${currency}`;
  }

  return value;
}

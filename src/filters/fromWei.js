import Utils from 'web3/lib/utils/utils'

export default function (value) {
  return Utils.fromWei(value, 'ether');
}

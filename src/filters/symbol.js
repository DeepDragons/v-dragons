import CONFIG from '../mixins/config'

let web3 = new window.Web3(CONFIG.providers);

export default function (value) {
  return web3.fromWei(value, 'ether');
}

import Crowdsale from '../mixins/ETH/crowdsale'

var CONFIG = window.config;

export function buyEgg({ getters, commit }) {
  let payload = getters.BUYFORM;
  let metaMask = getters.METAMASK;
  let crowdsale = new Crowdsale(getters.WEB3);

  if (metaMask.netID != CONFIG.netID) {
    metaMask.modal.wrongNetId = true;
    commit('METAMASK', metaMask);
    return null;
  }

  crowdsale.buy(
    payload.range,
    payload.isCheck
  );
}

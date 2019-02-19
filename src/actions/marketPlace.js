import MarketPlace from '../mixins/ETH/marketPlace'

var CONFIG = window.config;


export async function buyFromMarket({ getters, commit }, { tokenId }) {
  let ownersPrice;
  let metaMask = getters.METAMASK;

  if (metaMask.netID != CONFIG.netID) {
    metaMask.modal.wrongNetId = true;
    commit('METAMASK', metaMask);
    return null;
  }

  let marketPlace = new MarketPlace(getters.WEB3);
  let priceForToken = await marketPlace.dragonPrices(tokenId);
  let ownersPercent = await marketPlace.ownersPercent();

  ownersPercent = ownersPercent.div(10);
  ownersPrice = priceForToken.mul(ownersPercent).div(100);
  ownersPrice = ownersPrice.toFixed();
  priceForToken = priceForToken.add(ownersPrice).toString();

  await marketPlace.buyDragon(tokenId, priceForToken);
}

export async function delFromFixMarketPlace({ getters, commit }) {
  let dragon = getters.DRAGON;
  let marketPlace = new MarketPlace(getters.WEB3);
  let hash = await marketPlace.delFromFixMarketPlace(dragon.tokenId);
  dragon.currentAction = 'free';
  commit('DRAGON', dragon);
  console.log(hash);
}

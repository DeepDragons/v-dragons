import Dragonseth from '../mixins/ETH/dragonseth'
import { getBlockNumber } from '../mixins/ETH/web3'


export async function toSell({ getters, commit }, { tokenId, dragonPrice }) {
  let dragonseth = new Dragonseth(getters.WEB3);
  let hash = await dragonseth.add2MarketPlace(tokenId, dragonPrice);
  console.log(hash);
  let myDragon = getters.MYDRAGON;
  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == tokenId) {
      el.currentAction = 6;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
}

export async function addDragonName({ getters }, { tokenId, name }) {
  let dragonseth = new Dragonseth(getters.WEB3);
  let hash = await dragonseth.addDragonName(tokenId, name);
  console.log(hash);
}

export async function birth({ state, getters, commit }, { tokenId }) {
  let payload = state.dragon;
  let nextStage = 2;
  let dragonseth = new Dragonseth(getters.WEB3);
  let hash = await dragonseth.birthDragon(tokenId);
  console.log(hash);
  payload.stage = nextStage;
  commit('DRAGON', payload);
  let myDragon = getters.MYDRAGON;
  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == tokenId) {
      el.stage = nextStage;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
}

export async function transfer({ state, getters, commit }, { to, tokenId }) {
  let payload = state.dragon;
  let { currentAddress } = state.MetaMask;
  let dragonseth = new Dragonseth(getters.WEB3);
  let hash = await dragonseth.safeTransferFrom(
    currentAddress, to, tokenId
  );
  console.log(hash);
  payload.addressOwner = to;
  commit('DRAGON', payload);
  let myDragon = getters.MYDRAGON;
  myDragon.elements = myDragon.elements.map(el => el.id != tokenId);
  commit('MYDRAGON', myDragon);
}

export async function killDragon({ getters, commit }, { tokenId }) {
  let dragonseth = new Dragonseth(getters.WEB3);
  let hash = await dragonseth.killDragon(tokenId);
  console.log(hash);
  let myDragon = getters.MYDRAGON;
  myDragon.elements = myDragon.elements.map(el => el.id != tokenId);
  commit('MYDRAGON', myDragon);
}

export async function wakeUp({ getters, state, commit }) {
  let { nextBlock2Action, tokenId } = getters.DRAGON;
  let dragonseth = new Dragonseth(getters.WEB3);
  let price = await dragonseth.priceDecraseTime2Action();
  let currentBlockNUmber = await getBlockNumber(getters.WEB3);

  state.MetaMask.currentBlockNUmber = currentBlockNUmber;

  if (nextBlock2Action < currentBlockNUmber) {
    throw new Error('nexBN < currentBN');
  }

  price = price.mul(nextBlock2Action - currentBlockNUmber);
  price = price.toString();

  let hash = await dragonseth.decraseTimeToAction(
    tokenId, price
  );
  let myDragon = getters.MYDRAGON;

  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == tokenId) {
      el.nextBlock2Action = currentBlockNUmber;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
  console.log(hash);
}

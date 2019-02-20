import FightPlace from '../mixins/ETH/fightPlace'


export async function addToFight({ getters, commit }, { tokenId }) {
  let fightPlace = new FightPlace(getters.WEB3);
  let myDragon = getters.MYDRAGON;
  let price = await fightPlace.priceToAdd();
  let hash = await fightPlace.addToFightPlace(tokenId, price);
  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == tokenId) {
      el.currentAction = 1;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
  console.log(hash);
}

export async function fightWithDragon({ getters, commit }, { youId, oponentId }) {
  let fightPlace = new FightPlace(getters.WEB3);
  let price = await fightPlace.priceToFight();
  fightPlace.fightWithDragon(youId, oponentId, price);
  let myDragon = getters.MYDRAGON;
  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == youId) {
      el.nextBlock2Action *= 2;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
}

export async function delFromFightPlace({ getters, commit }) {
  let dragon = getters.DRAGON;
  let myDragon = getters.MYDRAGON;
  let fightPlace = new FightPlace(getters.WEB3);
  let hash = await fightPlace.delFromFightPlace(dragon.tokenId);
  dragon.currentAction = 'free';
  commit('DRAGON', dragon);
  console.log(hash);
  myDragon.elements = myDragon.elements.map(el => {
    if (el.id == dragon.tokenId) {
      el.currentAction = 0;
    }
    return el;
  });
  commit('MYDRAGON', myDragon);
}

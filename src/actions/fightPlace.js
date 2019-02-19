import FightPlace from '../mixins/ETH/fightPlace'


export async function addToFight({ getters }, { tokenId }) {
  let fightPlace = new FightPlace(getters.WEB3);
  let price = await fightPlace.priceToAdd();
  fightPlace.addToFightPlace(tokenId, price);
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
  let fightPlace = new FightPlace(getters.WEB3);
  let hash = await fightPlace.delFromFightPlace(dragon.tokenId);
  dragon.currentAction = 'free';
  commit('DRAGON', dragon);
  console.log(hash);
}

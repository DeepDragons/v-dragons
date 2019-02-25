import GenLab from '../mixins/ETH/genlab'


export async function genToMax({ getters }, { genNumber }) {
  let dragon = getters.DRAGON;
  let lab = getters.LAB;
  let genLab = new GenLab(getters.WEB3);
  
  let hash = await genLab.setMaxGen(
    dragon.tokenId, genNumber, lab.toMaxPrice
  );
  console.log(hash);
}

export async function genRand({ getters }, { genNumber }) {
  let dragon = getters.DRAGON;
  let lab = getters.LAB;
  let genLab = new GenLab(getters.WEB3);
  
  let hash = await genLab.mutateFightGenRandom(
    dragon.tokenId, genNumber, lab.forMutagenPrice
  );
  console.log(hash);
}
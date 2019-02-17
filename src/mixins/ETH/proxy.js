import ABI from './ABI/proxy'

var CONFIG = window.contracts;

export default class {

  constructor(web3, address=CONFIG.proxy, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.proxy = this.web3.eth.contract(abi).at(this.address);
  }

  tokensOf = _owner => new Promise((resolve, reject) => {
    /**
     * @param _owner: address;
     * @return uint256[];
     */
    this.proxy.tokensOf.call(_owner, (err, dragons) => {
      if (err) return reject(err);
      return resolve(dragons);
    });
  });

  getDragons = _dragonIDs => new Promise((resolve, reject) => {
    /**
     * @param uint256[];
     * @type view;
     */

    this.proxy.getDragons.call(_dragonIDs, (err, dragons) => {
      if (err) return reject(err);
      let data = [];

      for (let index = 0; index < dragons.length; index += 17) {
        if (dragons[index + 1]) {
          data.push({
            id:                 dragons[index + 1].toString(),
            owner:              this.web3.toHex(dragons[index + 2]),
            nextBlock2Action:   +dragons[index + 4],
            stage:              +dragons[index + 5],
            currentAction:      dragons[index + 6].toString(),
            gen2:               this.web3.toHex(dragons[index + 7]),
            lastActionID:       dragons[index + 8].toString(),
            lastActionDragonID: dragons[index + 9].toString(),
            fightWin:           dragons[index + 10].toString(),
            fightLose:          dragons[index + 11].toString(),
            children:           dragons[index + 12].toString(),
            fightToDeathWin:    dragons[index + 13].toString(),
            mutagenFace:        dragons[index + 14].toString(),
            mutagenFight:       dragons[index + 15].toString(),
            genLabFace:         dragons[index + 16].toString(),
            genLabFight:        dragons[index + 17].toString(),
          });
        }
      }
      return resolve({
        blockNumber: +dragons[0],
        result: data
      });
    });
  });

}

import ABI from './ABI/stat'

var CONFIG = window.contracts;

export default class {

  constructor(web3, address=CONFIG.stat, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.stat = this.web3.eth.contract(abi).at(this.address);
  }

  dragonStats = _dragonID => new Promise((resolve, reject) => {
    /**
     * @param _dragonID: uint256;
     * @type view;
     * @return uint256[];
     */
    this.stat.dragonStats.call(_dragonID, (err, stats) => {
      if (err) return reject(err);
      return resolve({
        fightWin: +stats[0],
        fightLose: +stats[1],
        children: +stats[2],
        fightToDeathWin: +stats[3],
        mutagenFace: +stats[4],
        mutagenFight: +stats[5],
        genLabFace: +stats[6],
        genLabFight: +stats[7]
      });
    });
  });

  // lastActions(_dragonID) {
  //   /**
  //    * @param _dragonID: uint256;
  //    * @type view;
  //    * @return uint256[];
  //    */
  // }

  // parents(_dragonID) {
  //   /**
  //    * @param _dragonID: uint256;
  //    * @type view;
  //    * @return uint256[];
  //    */
  // }
}

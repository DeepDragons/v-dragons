import ABI from './ABI/stat'

var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.crowdsale, abi=ABI) {
    this.address = address;
    this.stat = window.web3.eth.contract(abi).at(this.address);
  }

  dragonStats(_dragonID) {
    /**
     * @param _dragonID: uint256;
     * @type view;
     * @return uint256[];
     */
  }

  lastActions(_dragonID) {
    /**
     * @param _dragonID: uint256;
     * @type view;
     * @return uint256[];
     */
  }

  parents(_dragonID) {
    /**
     * @param _dragonID: uint256;
     * @type view;
     * @return uint256[];
     */
  }
}

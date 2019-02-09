var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.stat, abi) {
    if (!address || !abi) {
      throw new Error();
    }

    this.address = address;
    this.abi = abi;
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

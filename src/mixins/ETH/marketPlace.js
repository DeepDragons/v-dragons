var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.marketplace, abi) {
    if (!address || !abi) {
      throw new Error();
    }

    this.address = address;
    this.abi = abi;
  }

  buyDragon(_dragonID) {
    /**
     * @param: _dragonID: uint256;
     */
  }

  totalDragonsToSale() {
    /**
     * @return dragonsList.length: uint256;
     */
  }

  getSlicedDragonsSale(_firstIndex, _aboveLastIndex) {
    /**
     * @param _firstIndex: uint256;
     * @param _aboveLastIndex: uint256;
     * @return uint256[]:
     */
  }

  getOwnedDragonToSale(_owner) {
    /**
     * @param _owner: address;
     * @return uint256[];
     */
  }

}

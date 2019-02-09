var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.crowdsale, abi) {
    this.address = address;
    this.marketPlace = window.web3.eth.contract(abi).at(this.address);
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

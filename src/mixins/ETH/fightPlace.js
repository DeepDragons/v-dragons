var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.fightPlace, abi) {
    this.address = address;
    this.fightPlace = window.web3.eth.contract(abi).at(this.address);
  }

  getAllDragonsFight() {
    /**
     * @return uint256;
     */
  }

  priceToAdd() {
    /**
     * @return uint256;
     */
  }

  delFromFightPlace(_dragonID) {
    /**
     * @param _dragonID: uint256;
     */
  }

  getAddressDragons(_owner) {
    /**
     * @param _owner: address;
     */
  }

  addToFightPlace(_dragonID) {
    /**
     * @param _dragonID: uint256;
     * @type payable;
     */
  }

  changePrices(_priceToFight, _priceToAdd) {
    /**
     * @param _priceToFight: uint256;
     * @param _priceToAdd: uint256;
     * @type nonpayable;
     */
  }

  fightWithDragon(_yourDragonID, _thisDragonID) {
    /**
     * @param _yourDragonID: uint256;
     * @param _thisDragonID: uint256;
     * @type: payable;
     */
  }

  priceToFight() {
    /**
     * @type view;
     * @return uint256;
     */
  }
}
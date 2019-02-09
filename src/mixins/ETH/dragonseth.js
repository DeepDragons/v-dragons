var CONFIG = window.contracts;

export default class {
  
  constructor(address=CONFIG.crowdsale, abi) {
    this.address = address;
    this.dragonseth = window.web3.eth.contract(abi).at(this.address);
  }

  totalDragons() {
    /**
     * @return uint256;
     */
  }

  tokensOf(_owner) {
    /**
     * @param _owner: address;
     * @return uint256[];
     */
  }

  add2MarketPlace(_dragonID, _dragonPrice, _endBlockNumber) {
    /**
     * @param _dragonID: uint256;
     * @param _dragonPrice: uint256;
     * @param _endBlockNumber: uint256;
     */
  }

  dragons(_dragonID) {
    /**
     * @parma _dragonID: uint256;
     * @return [gen1:uint256, stage:uint8,
     *          currentAction:uint8, gen2:uint240,
     *          nextBlock2Action:uint256]
     */



  }

  birthDragon(_dragonID) {
    /**
     * @param _dragonID: uint256;
     */
  }

  safeTransferFrom(_from, _to, _tokenId) {
    /**
     * @param _from: address;
     * @param _to: address;
     * @param _tokenId: uint256;
     */
  }

  ownerOf(_tokenId) {
    /**
     * @param _tokenId: uint256;
     * @return owner: address;
     */
  }
}

/* eslint-disable */
import ABI from './ABI/dragonseth'

var addreses = window.contracts;

export default class {

  constructor(web3, address=addreses.dragonseth, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.dragonseth = this.web3.eth.contract(abi).at(this.address);
  }

  totalDragons = () => new Promise((resolve, reject) => {
    /**
     * @return uint256;
     */
    this.dragonseth.totalDragons.call((err, dragons) => {
      if (err) return reject(err);
      return resolve(dragons);
    });
  });

  tokensOf = _owner => new Promise((resolve, reject) => {
    /**
     * @param _owner: address;
     * @return uint256[];
     */
    this.dragonseth.tokensOf.call(_owner, (err, dragons) => {
      if (err) return reject(err);
      return resolve(dragons);
    });
  });

  // add2MarketPlace(_dragonID, _dragonPrice, _endBlockNumber) {
  //   /**
  //    * @param _dragonID: uint256;
  //    * @param _dragonPrice: uint256;
  //    * @param _endBlockNumber: uint256;
  //    */
  // }

  // dragons(_dragonID) {
  //   /**
  //    * @parma _dragonID: uint256;
  //    * @return [gen1:uint256, stage:uint8,
  //    *          currentAction:uint8, gen2:uint240,
  //    *          nextBlock2Action:uint256]
  //    */



  // }

  birthDragon = _dragonID => new Promise((resolve, reject) => {
    /**
     * @param _dragonID: uint256;
     */
    this.dragonseth.birthDragon.send(_dragonID, (err, hash) => {
      if (err) return reject(err);
      return resolve(hash);
    });
  });

  safeTransferFrom = (_from, _to, _tokenId) => new Promise((resolve, reject) => {
    /**
     * @param _from: address;
     * @param _to: address;
     * @param _tokenId: uint256;
     */
    this.dragonseth.safeTransferFrom.send(_from, _to, _tokenId, (err, hash) => {
      if (err) return reject(err);
      return resolve(hash);
    });
  });

  ownerOf = _tokenId => new Promise((resolve, reject) => {
    /**
     * @param _tokenId: uint256;
     * @return owner: address;
     */
    this.dragonseth.ownerOf.call(id, (err, address) => {
      if (err) return reject(err);
      return resolve(address);
    });
  });
}

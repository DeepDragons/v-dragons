/* eslint-disable */
import ABI from './ABI/dragonseth'
import { fallback } from './web3'

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

  dragonName = _dragonID => new Promise((resolve, reject) => {
    /**
     * @param _dragonID: uint256;
     * @return string;
     */
    this.dragonseth.dragonName.call(_dragonID, (err, dragonName) => {
      if (err) return reject(err);
      return resolve(dragonName);
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

  add2MarketPlace = (_dragonID, _dragonPrice) => {
    /**
     * @param _dragonID: uint256;
     * @param _dragonPrice: uint256;
     */
    let endBlock = 0;
    let code = this.dragonseth.add2MarketPlace.getData(
      _dragonID, _dragonPrice, endBlock
    );
    let data = { to: this.address, data: code };
    return fallback(data);
  }


  dragons = _dragonID => new Promise((resolve, reject) => {
    /**
     * @parma _dragonID: uint256;
     * @return [gen1:uint256, stage:uint8,
     *          currentAction:uint8, gen2:uint240,
     *          nextBlock2Action:uint256]
     *  color: A string gens color.
     *  combat: A string gens combat.
     *  stage: Dragon stage. 1: egg, 2: dragon.
     *  currentAction: 0 => 255.
     *                            0: free
     *                            1: fightPlace
     *                            2: random fight
     *                            3: breed market
     *                            4: breed auction
     *                            5: random breed
     */
    this.dragonseth.dragons.call(_dragonID, (err, dragonInfo) => {
      if (err) return reject(err);
      return resolve(dragonInfo);
    });
  });

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
    this.dragonseth.ownerOf.call(_tokenId, (err, address) => {
      if (err) return reject(err);
      return resolve(address);
    });
  });
}

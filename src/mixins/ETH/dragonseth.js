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

  birthDragon = _dragonID => {
    /**
     * @param _dragonID: uint256;
     */
    let code = this.dragonseth.birthDragon.getData(
      _dragonID
    );
    let data = { to: this.address, data: code };
    return fallback(data);
  }

  safeTransferFrom = (_from, _to, _tokenId) => {
    /**
     * @param _from: address;
     * @param _to: address;
     * @param _tokenId: uint256;
     */
    let code = this.dragonseth.safeTransferFrom.getData(
      _from, _to, _tokenId
    );
    let data = { to: this.address, data: code };
    return fallback(data);
  };

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

  addDragonName = (_dragonID, _newName) => {
    /**
     * @param _dragonID: uint256;
     * @param _newName: String;
     */
    let code = this.dragonseth.addDragonName.getData(
      _dragonID, _newName
    );
    let data = { to: this.address, data: code };
    return fallback(data);
  }

  killDragon = _dragonID => {
    /**
     * @param _dragonID: uint256;
     */
    let code = this.dragonseth.killDragon.getData(
      _dragonID
    );
    let data = { to: this.address, data: code };
    return fallback(data);
  }

  priceDecraseTime2Action = () => new Promise((resolve, reject) => {
    /**
     * @return uint256;
     */
    this.dragonseth.priceDecraseTime2Action.call((err, amount) => {
      if (err) return reject(err);
      return resolve(amount);
    });
  });

  decraseTimeToAction = (_dragonID, price) => {
    let code = this.dragonseth.decraseTimeToAction.getData(
      _dragonID
    );
    let data = {
      to: this.address,
      data: code,
      value: price
    };
    return fallback(data);
  }
}

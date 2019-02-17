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

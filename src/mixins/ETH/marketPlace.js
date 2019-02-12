/* eslint-disable */
import ABI from './ABI/marketPlace'
import { fallback } from './web3'


var addreses = window.contracts;


export default class {

  constructor(web3, address=addreses.marketPlace, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.marketPlace = this.web3.eth.contract(abi).at(this.address);
  }

  ownersPercent = () => new Promise((resolve, reject) => {
    this.marketPlace.ownersPercent.call((err, amount) => {
      if (err) return reject(err);
      return resolve(amount);
    });
  });

  dragonPrices = _dragonID => new Promise((resolve, reject) => {
    /**
     * @method: Get User price for token.
     */
    this.marketPlace.dragonPrices.call(_dragonID, (err, price) => {
      if (err) return reject(err);
      return resolve(price);
    });
  });

  buyDragon = (_dragonID, price) => {
    /**
     * @param: _dragonID: uint256;
     */
    
    let data = {
      value: price,
      to: this.address,
      data: this.marketPlace.buyDragon.getData(_dragonID)
    };
    return fallback(data);
  };

  totalDragonsToSale = () => new Promise((resolve, reject) => {
    /**
     * @return dragonsList.length: uint256;
     */
    this.marketPlace.totalDragonsToSale.call((err, amount) => {
      if (err) return reject(err);
      return resolve(amount.toString());
    });
  });

  getSlicedDragonsSale = (_firstIndex, _aboveLastIndex) => new Promise((resolve, reject) => {
    /**
     * @param _firstIndex: uint256;
     * @param _aboveLastIndex: uint256;
     * @return uint256[]:
     */
    this
    .marketPlace
    .getSlicedDragonsSale
    .call(_firstIndex, _aboveLastIndex, (err, dragons) => {
      if (err) return reject(err);
      return resolve(
        dragons.map(el => el.toString())
      );
    });
  });

  getOwnedDragonToSale = _owner => new Promise((resolve, reject) => {
    /**
     * @param _owner: address;
     * @return uint256[];
     */
    this.marketPlace.getOwnedDragonToSale.call(_owner, (err, ownerDragons) => {
      if (err) return reject(err);
      return resolve(ownerDragons);
    });
  });

  getFewDragons = _dragonIDs => new Promise((resolve, reject) => {
    /**
     * @param _dragonIDs: uint256[];
     * @return uint256[];
     */
    this.marketPlace.getFewDragons.call(_dragonIDs, (err, dragons) => {
      if (err) return reject(err);
      
      let data = [];

      for (let index = 0; index < dragons.length; index += 4) {
        if (dragons[index]) {
          data.push({
            id: dragons[index].toString(),
            stage: dragons[index + 1].toString(),
            owner: this.web3.toHex(dragons[index + 2]),
            price: dragons[index + 3].toString()
          });
        }
      }

      return resolve(data);

    });
  });

  dragonsOwner = _dragonIDs => new Promise((resolve, reject) => {
   /**
     * @param _dragonIDs: uint256[];
     * @return address;
     */
    this.marketPlace.dragonsOwner.call(_dragonIDs, (err, ownerAddress) => {
      if (err) return reject(err);
      return resolve(ownerAddress);
    });
  });
}

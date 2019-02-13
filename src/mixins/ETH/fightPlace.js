/* eslint-disable */
import ABI from './ABI/fightPlace'
import { fallback } from './web3'

var addreses = window.contracts;


export default class {

  constructor(web3, address=addreses.fightPlace, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.fightPlace = this.web3.eth.contract(abi).at(this.address);
  }

  getAllDragonsFight = () => new Promise((resolve, reject) => {
    /**
     * @return uint256;
     */
    this.fightPlace.getAllDragonsFight.call((err, tokens) => {
      if (err) return reject(err);
      return resolve(tokens);
    });
  });

  priceToAdd = () => new Promise((resolve, reject) => {
    /**
     * @return uint256;
     */

    this.fightPlace.priceToAdd.call((err, amount) => {
      if (err) return reject(err);
      return resolve(amount.toString());
    });
  });

  // delFromFightPlace(_dragonID) {
  //   /**
  //    * @param _dragonID: uint256;
  //    */
  // }

  // getAddressDragons(_owner) {
  //   /**
  //    * @param _owner: address;
  //    */
  // }

  addToFightPlace = (_dragonID, price) => {
    /**
     * @param _dragonID: uint256;
     * @type payable;
     */
    let code = this.fightPlace.addToFightPlace.getData(
      _dragonID
    );
    let data = {
      value: price,
      to: this.address,
      data: code
    };
    return fallback(data);
  }

  fightWithDragon(_yourDragonID, _thisDragonID, price) {
    /**
     * @param _yourDragonID: uint256;
     * @param _thisDragonID: uint256;
     * @type: payable;
     */

    let code = this.fightPlace.fightWithDragon.getData(
      _yourDragonID, _thisDragonID
    );
    let data = {
      value: price,
      to: this.address,
      data: code
    };
    return fallback(data);
  }

  priceToFight = () => new Promise((resolve, reject) => {
    /**
     * @type view;
     * @return uint256;
     */

    this.fightPlace.priceToFight.call((err, amount) => {
      if (err) return reject(err);
      return resolve(amount.toString());
    });
  });
}
import ABI from './ABI/genlab'
import { fallback } from './web3'

var addreses = window.contracts;


export default class {

  constructor(web3, address=addreses.genlab, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.genlab = this.web3.eth.contract(abi).at(this.address);
  }

  returnPrices = () => new Promise((resolve, reject) => {
    this.genlab.returnPrices.call((err, array) => {
      if (err) return reject(err);
      return resolve(array);
    });
  });

  setMaxGen(_dragonID, _genNum, price) {
    let code = this.genlab.setMaxGen.getData(
      _dragonID, _genNum
    );
    let data = {
      to: this.address,
      value: price,
      data: code
    };
    return fallback(data);
  }

  mutateFightGenRandom(_dragonID, _genNum, price) {
    let code = this.genlab.mutateFightGenRandom.getData(
      _dragonID, _genNum
    );
    let data = {
      to: this.address,
      value: price,
      data: code
    };
    return fallback(data);
  }

}

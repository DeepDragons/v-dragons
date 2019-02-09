import ABI from './ABI/crowdsale'


var CONFIG = window.contracts;

export default class {

  constructor(web3, address=CONFIG.crowdsale, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.crowdsale = this.web3.eth.contract(abi).at(this.address);
  }

  priceChanger = () => new Promise((resolve, reject) => {
    this.crowdsale.priceChanger.call((err, price) => {
      if (err) return reject(err);
      return resolve(price);
    });
  });

  crowdSaleDragonPrice = () => new Promise((resolve, reject) => {
    this.crowdsale.crowdSaleDragonPrice.call((err, price) => {
      if (err) return reject(err);
      return resolve(price);
    });
  });

  buy(_amount, _dragonPrice, _ref=null) {
    /**
     * @param _amount: max 15, uint8;
     * @param _ref: address || option;
     */

    let data = {
      to: this.address,
      data: _ref
    };

    this.crowdSaleDragonPrice.then(dragonPrice => {
      data.value = dragonPrice.mul(_amount);
      return this.fallback(data);
    });
  }

  fallback(_data) {
    /**
     * @param _data: transaction object;
     */
    return new Promise((resolve, reject) => {
      window.ethereum.eth.sendTransaction(_data, (err, hash) => {
        if (err) return reject(err); 
        return resolve(hash);
      });
    });
  }
}

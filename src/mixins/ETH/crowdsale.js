/* eslint-disable */
import ABI from './ABI/crowdsale'

var addreses = window.contracts;

export default class {

  constructor(web3, address=addreses.crowdsale, abi=ABI) {
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

  async buy(_amount, _isCheck=true, _ref=null) {
    /**
     * @param _amount: max 15, uint8;
     * @param _ref: address || option;
     * @param _isCheck: bool || Guarantee order.;
     */

    let data = {
      to: this.address,
      data: _ref
    };

    let crowdSaleDragonPrice = await this.crowdSaleDragonPrice();
    let guarantee = _isCheck ? 0 : await this.priceChanger();

    data.value = crowdSaleDragonPrice.add(guarantee);
    data.value = data.value.mul(_amount);

    return this.fallback(data);
  }

  fallback(_data) {
    /**
     * @param _data: transaction object;
     */
    return new Promise((resolve, reject) => {
      let web3 = new Web3(ethereum);
      web3.eth.sendTransaction(_data, (err, hash) => {
        if (err) return reject(err); 
        return resolve(hash);
      });
    });
  }
}

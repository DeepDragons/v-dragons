import ABI from './ABI/mutagen'

var addreses = window.contracts;

export default class {

  constructor(web3, address=addreses.mutagen, abi=ABI) {
    this.address = address;
    this.web3 = web3;
    this.mutagen = this.web3.eth.contract(abi).at(this.address);
  }

  balanceOf = _owner => new Promise((resolve, reject) => {
    /**
   * @param _owner: address;
   * @type view;
   * @return uint256;
   */
    this.mutagen.balanceOf.call(_owner, (err, amount) => {
      if (err) return reject(err);
      return resolve(amount);
    });
  });

}

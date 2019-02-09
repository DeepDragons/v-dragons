var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.crowdsale, abi) {
    if (!address || !abi) {
      throw new Error();
    }

    this.address = address;
    this.abi = abi;
  }

  crowdSaleDragonPrice() {}

  priceChanger() {}

  buy(_amount) {
    /**
     * @param _amount: max 15, uint8;
     */
  }
}

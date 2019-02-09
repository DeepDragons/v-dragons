var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.crowdsale, abi) {
    this.address = address;
    this.mutagen = window.web3.eth.contract(abi).at(this.address);
  }

  balanceOf(_owner) {
    /**
     * @param _owner: address;
     * @type view;
     * @return uint256;
     */
  }
}

var CONFIG = window.contracts;

export default class {

  constructor(address=CONFIG.mutagen, abi) {
    if (!address || !abi) {
      throw new Error();
    }

    this.address = address;
    this.abi = abi;
  }

  balanceOf(_owner) {
    /**
     * @param _owner: address;
     * @type view;
     * @return uint256;
     */
  }
}

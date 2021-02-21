/* eslint-disable */
import CODE from './code'

const CONFIG = window.config;

function log(msg) {
  console.warn('WEB3:', msg);
}

export function isAddress({ commit, state }) {
  let payload = state.MetaMask;
  let interval = setInterval(() => {
    if (!window.ethereum && !window.web3) {
      payload.msg = CODE[2];
      log(payload.msg);
      payload.currentAddress = null;
      clearInterval(interval);
      commit('METAMASK', payload);
    } else if (window.ethereum && window.ethereum['selectedAddress']) {
      if (payload.currentAddress !== window.ethereum['selectedAddress']) {
        payload.msg = CODE[3];
        payload.currentAddress = window.ethereum['selectedAddress'];
        log(payload.msg);
        commit('METAMASK', payload);
      }
    } else if (window.web3 && window.web3.eth.coinbase) {
      if (payload.currentAddress !== window.web3.eth.coinbase) {
        payload.msg = CODE[3];
        payload.currentAddress = window.web3.eth.coinbase;
        log(payload.msg);
        commit('METAMASK', payload);
      }
    } else {
      payload.msg = CODE[7];
      log(payload.msg);
      commit('METAMASK', payload);
    }
  }, 1000);
}

export async function enable({ commit, state }) {
  let payload = state.MetaMask;

  if (window.ethereum) {
    try {
        // Request account access if needed
        await ethereum.enable();
        window.web3 = window.ethereum;
        payload.msg = CODE[0];
    } catch (error) {
        // User denied account access
        payload.msg = CODE[1];
    }
  } else if (window.web3) {
    web3 = window.web3;
  } else {
    payload.msg = CODE[2];
  }

  log(payload.msg);
  commit('METAMASK', payload);
}

export function isNet({ commit, state }) {
  let web3;
  let payload = state.MetaMask;

  if (window.ethereum) {
    web3 = new Web3(ethereum);
  } else if (window.web3) {
    web3 = window.web3;
  }

  setInterval(() => {
    if (!web3) {
      return null;
    } else {
      web3.version.getNetwork((err, netID) => {
        let code;
        payload.netID = err ? err : netID;
        if (CONFIG.netID != netID) {
          code = CODE[6];
        } else {
          code = CODE[5];
        }
        payload.msg = code;
        commit('METAMASK', payload);
        // log(code);
      });
    }
  }, 1000);
}

export function fallback(_data) {
  /**
   * @param _data: transaction object;
   */
  return new Promise((resolve, reject) => {
    let web3;

    if (window.ethereum) {
      web3 = new Web3(ethereum);
    } else if (window.web3) {
      web3 = window.web3;
    }
    
    console.log(_data);

    web3.eth.sendTransaction(_data, (err, hash) => {
      if (err) return reject(err); 
      return resolve(hash);
    });
  });
}

export function getBlockNumber(web3) {
 return new Promise((resolve, reject) => {
    web3.eth.getBlockNumber((err, blockNumber) => {
      if (err) return reject(err);
      resolve(blockNumber);
    });
 }); 
}

export async function blockNumberUpdate({ getters, state }, { number }) {
  let web3 = getters.WEB3;

  if (number) {
    state.MetaMask.currentBlockNUmber = number;
  } else {
    state.MetaMask.currentBlockNUmber = await getBlockNumber(web3);
  }

  return state.MetaMask.currentBlockNUmber;
}

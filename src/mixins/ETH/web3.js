/* eslint-disable */
import CODE from './code'

const config = window.config;


function log(msg) {
  console.warn('WEB3:', msg);
}

export function isAddress({ commit, state }) {
  let payload = state.MetaMask;
  let interval = setInterval(() => {
    if (!window.ethereum) {
      payload.msg = CODE[2];
      log(payload.msg);
      payload.currentAddress = null;
      clearInterval(interval);
      commit('METAMASK', payload);
    } else if (window.ethereum['selectedAddress']) {
      if (payload.currentAddress !== window.ethereum['selectedAddress']) {
        payload.msg = CODE[3];
        payload.currentAddress = window.ethereum['selectedAddress'];
        log(payload.msg);
        commit('METAMASK', payload);
      }
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
  } else {
    // window.web3 = new window.Web3(CONFIG.providers);
    payload.msg = CODE[2];
  }

  log(payload.msg);
  commit('METAMASK', payload);
}

export function isNet({ commit, state }) {
  let payload = state.MetaMask;
  let web3 = new Web3(ethereum);

  setInterval(() => {
    if (!web3) {
      return null;
    } else {
      web3.version.getNetwork((err, netID) => {
        let code;
        payload.netID = err ? err : netID;
        if (config.netID != netID) {
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
    let web3 = new Web3(ethereum);
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
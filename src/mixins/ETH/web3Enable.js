/* eslint-disable */

function log(msg) {
  console.warn('Web3:', msg);
}


export default async function() {
  let msg;

  if (window.ethereum) {
    try {
        // Request account access if needed
        await ethereum.enable();
        window.web3 = window.ethereum;
        msg = 'DETECT';
    } catch (error) {
        // User denied account access
        msg = 'User denied account access';
    }
  } else {
    // window.web3 = new window.Web3(CONFIG.providers);
    msg = 'none MetaMask mode';
  }

  log(msg);
}

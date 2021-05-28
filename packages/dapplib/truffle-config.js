require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike rival noble mistake install creek fringe gift'; 
let testAccounts = [
"0xd2af90cf049ef46ba7c65a7ec02684a3acf23fef98a3eabfe4ba9c790d76ad4a",
"0x987cfe29481d453119514dda4f1a72e7b04ad5c4fbfb0a4d43961e65f8a185b8",
"0x0c939cdc63ce61bdf81967b13f2adcf12d94b71b2f3b65b33e5654e90ee60837",
"0x8440205cb62e4372453a5bf228b18e97b4ce48514f6422c0271940d08369326c",
"0xc296188c0ea79c7e99b9c900bf88e035e534b40b22daa92e24bb2849a3732e89",
"0x11a126d582cd18c9f7296709c91df47688fcfef0607a690f53a0e91e3287e0c8",
"0x8671c089caf5dae8a15d4762b2741d8dd5cec43900b3eff51388e24b27511aa3",
"0x5dd7f0520806fa80f38f6ac077d5a2524440346b61108bc524624e66862deb48",
"0x53a7b1d8bd8e25db49b72a2c8621bb5de635f40e8be0deaba26398016cfdf237",
"0xb25f45276cb40b7f50ce315c8c3654243fdadb056296a22cdc0fe15555c31365"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


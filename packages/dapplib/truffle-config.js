require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue reward stereo comic harvest opinion bridge gift'; 
let testAccounts = [
"0x25fc5d4a08d1d72ca74711e72a8711a59e075136ec9509c62ed08deb209dfe7a",
"0x7832ceef73924ea732a6360482edab18a0a9b5df16344b564884802fd11176bf",
"0x11995e00c2891929d9f56e5b1e6e490a38b578f637fef6e50e90e0558957d0cc",
"0xddc07ed7a35b4672f44ab290e8965145aacc8e8d1eb086abc9b9a99e16e6289e",
"0x0acc5ce99447f212ee2977b55fa7cabe2ec777cd7b468fdf39bfa70b05573067",
"0xb986b5798d0071149df81d39eed682a13cf3a4ba73032054e84c2fc258bdd119",
"0xe1767e6f932a61501e1d27c8eb3326d6eeef56d8085d2e28e74b5d41c51300d7",
"0x01d07755bf0ad3cfba241614848782c485f46848c15f8f396c22d0faa405d521",
"0xfa0bdef7b14924fd118d00827718f2c8a8602a723c2c02439cdcf2fc1f1cc94c",
"0x8d70779d24fbf542ddb9e00091ca885a0ef18278f20c2602058ee419b4d8ac08"
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


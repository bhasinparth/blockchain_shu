const web3= require('./setup.js');
var w_contract= require('../config/contract.js');
const keys= require('../config/keys.js');

const acc=web3.eth.accounts.privateKeyToAccount('0xB282DA748B5F7DC71CE3ECCE67D0C0B162D915EC5C74CD62CEF00005943EFE28');
web3.eth.accounts.wallet.add(acc);
web3.eth.defaultAccount=acc.address;


w_contract.methods.get_contract().call().then(function (result){
    console.log(result);
})
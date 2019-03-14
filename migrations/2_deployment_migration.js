var Wood_contract= artifacts.require("./wood_contract.sol");

module.exports = function(deployer) {
    deployer.deploy(Wood_contract);
};
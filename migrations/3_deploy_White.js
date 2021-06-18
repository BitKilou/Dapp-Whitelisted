var WhiteList = artifacts.require("./Whitelist.sol");

module.exports = function(deployer) {
  deployer.deploy(Whitelist);
};
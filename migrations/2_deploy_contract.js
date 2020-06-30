const Electricity = artifacts.require("./Electricity.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

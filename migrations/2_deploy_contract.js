var Transactions = artifacts.require("Transactions.sol");

module.exports = (deployer) => {
    deployer.deploy(Transactions);
}
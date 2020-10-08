var Transactions = artifacts.require("TransactMoney");

module.exports = (deployer) => {
    deployer.deploy(Transactions);
}
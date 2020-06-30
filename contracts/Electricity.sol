pragma solidity >=0.4.21 <0.7.0;

contract Electricity {
    address public retailer;
    uint256 public retailerBalance;
    uint256 public contractBalance;

    constructor() public payable{
        retailer = msg.sender;
        // retailerBalance = retailer.balance/100000000000000000;
        retailerBalance = retailer.balance;
        contractBalance = address(this).balance;

    }
}

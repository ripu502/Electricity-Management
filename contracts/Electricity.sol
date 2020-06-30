pragma solidity >=0.4.21 <0.7.0;

contract Electricity {
    address public retailer;

    constructor() public {
        retailer = msg.sender;
    }
}

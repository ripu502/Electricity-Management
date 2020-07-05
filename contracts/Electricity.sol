pragma solidity >=0.4.21 <0.7.0;

// pragma solidity 0.5.17;

contract Electricity {
    address public admin;
    uint256 public adminBal;
    mapping(address => uint256) custAdd2Bal;
    mapping(address => uint256) custAdd2Elec;

    constructor() public {
        admin = msg.sender;
        adminBal = admin.balance;
    }

    function getAddress2Bal(address _tokenDist) public view returns (uint256) {
        uint256 b = _tokenDist.balance;
        return b;
    }

    function addCustomer(address _cust) public payable returns (bool) {
        custAdd2Bal[_cust] = _cust.balance;
        return true;
    }

    function gettingCustBal(address _add) public view returns (uint256) {
        return custAdd2Bal[_add];
    }

    function buyElec(address _add, uint256 amt) public payable {
        custAdd2Elec[_add] = custAdd2Elec[_add] + amt;
        custAdd2Bal[_add] = custAdd2Bal[_add] - amt;
    }

    function getElec(address _add) public view returns (uint256) {
        return custAdd2Elec[_add];
    }

    function spendElec(address _add, uint256 elecUnit) public returns (bool) {
        adminBal = adminBal + elecUnit;
        custAdd2Elec[_add] = custAdd2Elec[_add] - elecUnit;
        return true;
    }

    function closeAcc(address _add) public returns (bool) {
        custAdd2Bal[_add] = custAdd2Bal[_add] + custAdd2Elec[_add];
        custAdd2Elec[_add] = 0;
    }
}

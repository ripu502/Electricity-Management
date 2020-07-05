//import web3
const Web3 = require('web3');
const web3 = new Web3('http://localhost:9545', null, {});   //set ethereum node RPC

//setup contract object
const ElectricJson = require("./Contracts/Electricity.json");

const Electric = new web3.eth.Contract(ElectricJson.abi, "0x6F772014E6c433ace35999588C6209cd3d198F54");



export async function getAllAccounts() {
    return web3.eth.getAccounts();
};

export async function adminAddress() {
    try {
        return Electric.methods.admin().call();
    } catch (err) {
        throw err;
    }
};


export async function adminBalance() {
    try {
        return Electric.methods.adminBal().call();
    } catch (err) {
        throw err;
    }
};

export async function addCustomer() {
    try {
        let newAccount = await web3.eth.accounts.create();
        return await Electric.methods.addCustomer(newAccount.address).call()
        
    } catch (err) {
        throw err;
    }
};


export async function getBalanceCustomer(account) {
    try {
        return await Electric.methods.gettingCustBal(account).call()
    } catch (err) {
        throw err;
    }
};




// export async function toEther(amount) {
//     try {
//         console.log('wrf');
//         return  web3.utils.fromWei(amount, 'ether')
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// }


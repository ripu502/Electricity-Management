# Electricity-Management

### Making the play with console

1. `truffle console`
2. Taking the deployed contract instance for the play
   `electric = await Electricity.deployed()`
3. Getting the address of the deployed contract
   `electric.address`
4. Getting the address of the Retailer

	    electric.retailer()

6. Balance of the contract 

	    temp = await electric.contractBalance()
	    temp.toNumber()

---
# Some Change
1. React App is removed
2. Contract is changed
3. Ganache is changed is truffle develop
# CMD

    truffle compile
    truffle migrate --reset
    trufle develop // in new comsole for local blockchain with 10 accounts
    truffle console // in new terminal for play 

## CMD FUN using truffle console
`

    electric = await Electricity.deployed()
    // for admin address
    electric.admin()
    // for admin balance
     electric.adminBal()
     // for adding the customer
     electric.addCustomer('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34')
     // getting customer balance
     electric.gettingCustBal('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34')
     // buying electricity
     electric.buyElec('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34', 99999999999999)
     // getting customer balance
     electric.gettingCustBal('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34')
	// getting customer electricity balance
	electric.getElec('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34')
	// spend the electricity balance
	electric.spendElec('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34',99999999999999)
	// getting new electricity balance
	electric.getElec('0x5c83fa6675e9bd1ae19406bb8beeff5ad7413c34')


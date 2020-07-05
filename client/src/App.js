import React from 'react';
import './App.css';
import {
  adminAddress,
  adminBalance,
  addCustomer,
  getBalanceCustomer
} from "./util";

class App extends React.Component {
  state = {
    admin: null,
    adminBalance: null,
    input: null
  }
  componentDidMount = () => {
    this.admin();
    adminBalance().then(res => {
      this.setState({
        adminBalance: res
      })
    })

  }
  admin = () => {
    adminAddress().then(res => {
      this.setState({
        admin: res
      })
    })
  }
  adCust = () => {
    console.info('here');
    addCustomer().then(res => {
      console.log(res)
    })
  }
  inputh = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  bal = () => {
    getBalanceCustomer(this.state.input).then(res=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <p>Admin address is {this.state.admin}</p>
        <p>Admin address is {this.state.adminBalance}</p>
        <p onClick={this.adCust}> add the customer </p>
        <input type="text" value={this.state.input} onChange={(e) => { this.inputh(e) }} />
        <p onClick={this.bal}> Get Balnce</p>
      </div>
    )
  }
}

export default App;

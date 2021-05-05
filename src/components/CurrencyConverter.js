import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {retrieveCurrencyRates} from '../actions/actions';
import customerordersActions from "../redux/actions/customerorders";

import { connect } from "react-redux";
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class CurrencyConverter extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: [],
            amount:''
        };
        this.name = "";
        this.rate = 0.0;
      }
      componentDidMount(){
        this.fetchCustomerOrders();  
    }
    async fetchCustomerOrders(){
      const {name} = this.props.location.state;
      let result = {data: name};
      let response = await this.props.dispatch(customerordersActions.retrieveCustomerOrders(result));
      this.setState({response});
    }
    handleRateChange = (event) => {
        event.preventDefault();
        this.setState({amount: event.target.value});
      }
    gotoHome = (event) => {
        event.preventDefault();
        const {name} = this.props.location.state;
        this.props.history.push("/home",{
            name:name
        }); 
    }
    Logout = (event) => {
      event.preventDefault();
      const {name} = this.props.location.state;
      this.props.history.push("/login",{
          name:name
      });
    }
    gotoCustomerOrders = (event) => {
      event.preventDefault();
      const {name} = this.props.location.state;
      this.props.history.push("/customerorders",{
          name:name
      });
    }
    gotoCurrencyRates = (event) => {
        event.preventDefault();
        const {name} = this.props.location.state;
        this.props.history.push("/currencyrates",{
            name:name
        });
      }
    convertCurrency = (event) => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {rate} = this.props.location.state;
        const {amount} = this.state;
        let converted_amount = (parseFloat(rate.toFixed(2)))*(parseFloat(amount));
        toast.success("The amount converted from USD to the selected rate is: "+converted_amount);
        
      }
      render() {
        const {name} = this.props.location.state;
        const {rate} = this.props.location.state;
        console.log(name);
        let counter = 1;
        let rows = [];
        this.name = name;
        console.log(this.state.data);
        const contents = this.props.customerorders.forEach((item, key) => {
          if(key % 2 === 0)
          {
            rows.push(<tr className='Odd-Row'>
            <td>{counter}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{(item.totalprice*rate).toFixed(2)}</td>
            </tr>);
          }else{
            rows.push(<tr className='Even-Row'>
            <td>{counter}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{(item.totalprice*rate).toFixed(2)}</td>
            </tr>);
          };
          counter = counter + 1;
     });
        return (
          <div className="container">
              <div className="col-lg-14 m-auto">
                 <div className="card card-body">
              <br></br>
              <Navbar fixed="top" className="color-nav" collapseOnSelect expand="lg" variant="dark" >
          <Navbar.Brand onClick={this.gotoHome}>
      <img
        alt=""
        src="/greengamingpc.png"
        width="25"
        height="33"
        className="d-inline-block align-top"
      />{' '}
     NDXHardware
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={this.gotoCustomerOrders}>Customer Orders</Nav.Link>
      <Nav.Link onClick={this.gotoCurrencyRates}>Currency Rates</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={this.Logout}>
        Logout 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
              <br></br> 
              <br></br>
              <br></br>
              <br></br> 
              <br></br>
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> This is how much you have payed in your selected currency for each order
            </h2>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="customerorders.png" ></img>
            </div>
            <br></br>
            <table className="table table-striped table-dark">
              <thead>
              <tr className='Table-header'>
                <th>Order NB</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Motherboard</th>
                <th>PSU</th>
                <th>Price in Selected Rate</th>
              </tr>
              </thead>
              {rows}
            </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            <br></br>
            </div>
          </div>
        );
      }
  }
  const mapStateToProps = state =>({
    customerorders: state.customerOrdersReducer.customerorders,
    delMessage: state.customerOrdersReducer.delMessage,
    didDelete: state.customerOrdersReducer.didDelete
  })
  export default connect(mapStateToProps)(CurrencyConverter);
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
class CurrencyRates extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.name = "";
        this.currencyrates = [];
        this.currencytypes = [];
      }
      componentDidMount(){
        this.fetchCurrencyRates();
    }
    fetchCurrencyRates = () => {
      retrieveCurrencyRates().then(result => {
       let rates = [];
       let values = Object.values(result.data);
       let types = Object.values(result.data);
        for(let i = 0; i < values.length; i++){
          if(values[i] instanceof Object){
            rates = Object.values(values[i]);
            types = Object.keys(types[i]);
          }
        }
        for(let j = 0; j < rates.length; j++){
          this.currencyrates.push(rates[j]);
          this.currencytypes.push(types[j]);
        }
       
        this.setState({data:this.currencyrates});
      }).catch(err=>{
        alert("Failed to fetch rates "+err);
      });
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
    selectCurrency = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        
      }
      render() {
       console.log(this.currencytypes[0]);
        const {name} = this.props.location.state;
        console.log(name);
        return (
          <div className="container">
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
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a Currency Option
            </h2>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="cash.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.currencyrates} types={this.currencytypes} collectionName="currency_rates"  history={this.props.history}
            location={this.props.location}>
            </NDXSoftwareTable>
            <br></br>
            <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            <br></br>
          </div>
        );
      }
  }
  
  export default CurrencyRates;
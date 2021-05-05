import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {retrieveCustomerOrders,deleteOrder} from '../actions/actions';
import customerordersActions from "../redux/actions/customerorders";
import { connect } from "react-redux";
import '../App.css';
import {Link} from  'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class CustomerOrders extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.name ="";
        this.DeleteOrder = this.DeleteOrder.bind(this);
      }
      componentDidMount(){
          this.fetchCustomerOrders();
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
  gotoPriceGraph = (event) => {
    event.preventDefault();
    const {name} = this.props.location.state;
    this.props.history.push("/pricegraph",{
        name:name
    });
  }
  gotoCurrencySelection = (event) => {
    event.preventDefault();
    const {name} = this.props.location.state;
    this.props.history.push("/currencyrates",{
        name:name
    });
  }
   async fetchCustomerOrders(){
        const {name} = this.props.location.state;
        let result = {data: name};
        let response = await this.props.dispatch(customerordersActions.retrieveCustomerOrders(result));
        this.setState({response});
      }
   async DeleteOrder(event){
        event.preventDefault();
        const {name} = this.props.location.state;
        let id = event.target.id;
        let data = {id:id};
        let result = await this.props.dispatch(customerordersActions.deleteOrder(data));
        this.setState({result});
      if (this.props.didDelete) {
        alert("PC Configuration deleted successfully!");
        window.location.reload(false);
      }
      else {
        alert("Couldn't remove PC Configuration!");
      }
      }
      render() {
        let counter = 1;
        let rows = [];
        const {name} = this.props.location.state;
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
            <td>{item.totalprice.toFixed(2)}</td>
            <td><button id={item._id} className="btn" onClick={this.DeleteOrder}>Delete Order</button></td>
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
            <td>{item.totalprice.toFixed(2)}</td>
            <td><button id={item._id} className="btn" onClick={this.DeleteOrder}>Delete Order</button></td>
            </tr>);
          };
          counter = counter + 1;
     });

        return (
          <div className="container col-15">
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
      <Nav.Link onClick={this.gotoPriceGraph}>Orders Summary Graph</Nav.Link>
      <Nav.Link onClick={this.gotoCurrencySelection}>Currency Rates</Nav.Link>
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
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a PC Order Option
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
                <th>Total Price $</th>
                <th>PC Deletion</th>
              </tr>
              </thead>
              {rows}
            </table>
            <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            <br></br>
          </div>
        );
      }
}
const mapStateToProps = state =>({
  customerorders: state.customerOrdersReducer.customerorders,
  delMessage: state.customerOrdersReducer.delMessage,
  didDelete: state.customerOrdersReducer.didDelete
})

export default connect(mapStateToProps)(CustomerOrders);
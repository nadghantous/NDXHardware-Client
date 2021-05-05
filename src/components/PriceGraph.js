import React, { Component} from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {Slider} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {retrieveUserPriceOrders} from '../actions/actions';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import customerordersActions from "../redux/actions/customerorders";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import PieChart from "react-apexcharts";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { green } from '@material-ui/core/colors';
class PriceGraph extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
           
            options: {
               
                chart: {
                  width: 1100,
                  type: 'pie'
                  
                },
                   
              },
              labels: [],
             
              series: [],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 380
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }],

              
              data: [],
            }
        this.name = "";
        this.fetchUserPriceOrders = this.fetchUserPriceOrders.bind(this);
      }
      componentDidMount(){
        this.fetchUserPriceOrders();
        toast.success("This chart will display the investments of your orders throughout time.")
    }
   async fetchUserPriceOrders(){
        const {name} = this.props.location.state;
        console.log(name);
        let result = {data: name};
        let response = await this.props.dispatch(customerordersActions.retrieveUserPriceOrders(result));
        this.setState({response});
        console.log(this.props.customerpriceorders.data);
        let price_values = [];
        let ordernbs = [];
        let counter = 1;
        const contents = this.props.customerpriceorders.data.forEach((item,key) => {
           price_values.push(item.totalprice);
           ordernbs.push("Order NB: "+counter);
           counter++;
       });  
       this.setState({
        series:price_values,
        labels:ordernbs
     });
     console.log(this.state.series);
     console.log(this.state.labels);
      }

    gotoHome = (event) => {
        event.preventDefault();
        const {name} = this.props.location.state;
        this.props.history.push("/home",{
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
  Logout = (event) => {
    event.preventDefault();
    const {name} = this.props.location.state;
    this.props.history.push("/login",{
        name:name
    });
  }

    render() {
        const {name} = this.props.location.state;
        this.name = name;
     
      return (
        <div className="container">
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
      <Nav.Link onClick={this.gotoCustomerOrders}>View Orders</Nav.Link>
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
            <div className="col-lg-12 m-auto">
            <div className="card card-body">
            <br></br>
            <br></br>
            <h2 class="text-center mb-3" className="Label">Price Summary of All Orders
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
              <div id="chart">
              <Chart
             options={this.state.options}
             series={this.state.series}
             type='pie'
             width="1100"
            />
              </div>
           <br></br>
           <br></br>

            <h5 class="text-center mb-3" className="Label"><b>
           Your Investments For Each PC Configuration </b> 
            </h5>  
           
            <br></br>
            </div>
                <br></br>
            <br></br>
            </div>
        </div>        
          </div>
      );
    }
  }
  
  const mapStateToProps = state =>({
    customerpriceorders: state.customerOrdersReducer.customerpriceorders
  })
  
  export default connect(mapStateToProps)(PriceGraph);
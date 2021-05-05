import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {findUser,retrieveUsers} from '../actions/actions';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class MainMenu extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.name = "";
      }
     
      componentDidMount(){
      toast.success("Choose these following options wisely!")
    }

  gotoCustomPC = (event) => {
     event.preventDefault();
     const {name} = this.props.location.state;
     this.props.history.push("/custompccpu",{
         name:name
     });
  }
  gotoBudgetPC = (event) => {
    event.preventDefault();
    const {name} = this.props.location.state;
    this.props.history.push("/budgetpc",{
        name:name
    });
  }
  gotoPerformancePC = (event) => {
    event.preventDefault();
    const {name} = this.props.location.state;
    this.props.history.push("/performancepc",{
        name:name
    });
  }
  gotoViewOrders = (event) => {
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
        const {startprice} = this.props.location.state;
        const {name} = this.props.location.state;
        this.name = name;
        console.log(startprice);
      return (
        
        <div className="container">
          <Navbar fixed="top" className="color-nav" collapseOnSelect expand="lg" variant="dark" >
          <Navbar.Brand href="/home">
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
      <Nav.Link  onClick={this.gotoViewOrders}>View Orders</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={this.Logout} >
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          <div className="col-lg-12 m-auto">
  
            <div className="card card-body">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i>Welcome to NDXHardware
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group" id="over">
            <img src="home.png" ></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
            <h4 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> <b>
            If there's no hardware for a gamer
            then theres no need for a gamer.
            </b> 
            </h4> 
            </div>
            <br></br>
              <br></br>
              <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            Please select an option to satisfy your need for PC configurations</b> 
            </h5>  
            <br></br>
            
            </div>
            <br></br>
        <br></br>
            <div className="form-group">
               <br></br>
               <br></br>
               <div className="form-group" >
                 <div className="bpc" onClick={this.gotoBudgetPC}>
                 <img  class="budgetpc" src="budgetpcoption.png"></img>
        <h3 class="text-center mb-3" className="text">Budget PC</h3>
        <br></br>
        <p className="text">You are a gamer that has a certain budget, yet you don't know anything about the parts of the computers, then this option is for you. Very simple, you choose a budget and it will display a range of PC Configurations based
          on that budget.
        </p>
                 </div>
              
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="cpc" onClick={this.gotoCustomPC} >
        <img class="custompc" src="custompcoption.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Custom PC</h3>
        <br></br>
        <p className="text">You are a gamer that is familiar with PC parts and wants to customize a PC Configuration, yet you don't know anything about how much money you are willing to spend on that custom build, then this option is for you. You choose a wide range of selection of parts from CPU, GPU and other parts, and it will display the total price of the configuration.
        </p>
        </div>
        <br></br>
               <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
             <br></br>
             <div className="ppc" onClick={this.gotoPerformancePC} >
             <img class="performancepc" src="performancpcoption.png"></img>
             <br></br>
             <h3 class="text-center mb-3" className="text">Performance PC</h3>
             <br></br>
             <p className="text">You are a user that wants a PC configuration based on certain questions you will be asked about PC use categories.
             </p>
        </div>
               </div>
               <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

               <hr></hr>
            
            </div>
           
              <br></br>
              <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            </div> 
        </div>
            
        </div>
      );
    }
  }
  export default MainMenu;
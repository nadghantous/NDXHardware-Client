import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import { toast } from 'react-toastify'
import VanillaTilt from 'vanilla-tilt';
import 'react-toastify/dist/ReactToastify.css';
class StartUp extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.name = "";
      }
     
      componentDidMount(){
    }

  gotoCustomerLogin = (event) => {
     event.preventDefault();
     this.props.history.push("/login");
  }
  gotoAdminLogin = (event) => {
    event.preventDefault();
    this.props.history.push("/loginadmin");
  }
    render() {
      
      return (
        
        <div className="container">
          <div className="col-lg-12 m-auto">
            <div className="card card-body">
              <br></br>
              <br></br>
            <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i>NDXHardware. Where Innovation Thrives 
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group" id="over">
            <img src="greengamingpc.png" ></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            Please select your role to contribute in this app </b> 
            </h5>  
            <br></br>
            </div>
              <br></br>
              <br></br>
            <div data-tilt onClick={this.gotoAdminLogin} className="adm">
            <img class="admin" src="admin.png"></img>
            <h3 class="text-center mb-3" className="text">Admin</h3>
        <br></br>
        <p className="text">You are the admin, so you got the authority to improve our corporation by adding computer parts up to date to satisfy the customer's needs and requirements for exceptional PC configurations.
        </p>
            </div>

            <div onClick={this.gotoCustomerLogin} className="cust">
            <img src="customer.png" class="customer"></img>
            <h3 class="text-center mb-3" className="text">Customer</h3>
        <br></br>
        <p className="text">You are the customer, so you are entitled to help us improve your PC needs and requirements to deliver exceptional results for you.
        </p>
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
            
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            </div> 
        </div>
            
        </div>
        
      );
    }
  }
  export default StartUp;
import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createCustomerOrder} from '../actions/actions';
import { Button } from 'react-bootstrap';
import customerordersActions from "../redux/actions/customerorders";
import { connect } from "react-redux";
class TotalPrice extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.price = 0;
        this.CPU = "";
        this.GPU = "";
        this.name = "";
        this.RAM = "";
        this.Storage = "";
        this.Motherboard = "";
        this.PSU = "";
        this.OrderPC = this.OrderPC.bind(this);
      }
      componentDidMount(){
          
    }
    async OrderPC(event){
        event.preventDefault();
        const {totalprice} = this.props.location.state;
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        const {Motherboard} = this.props.location.state;
        const {PSU} = this.props.location.state;
        let finaltotalprice = parseFloat(totalprice.toFixed(2));
        let pc_configuration = {
          name: name,
          CPU: CPU,
          GPU: GPU,
          RAM: RAM,
          Storage: Storage,
          Motherboard: Motherboard,
          PSU: PSU,
          totalprice: finaltotalprice
        }
        let result = await this.props.dispatch(customerordersActions.createCustomerOrder(pc_configuration));
        this.setState({result});
      console.log(this.props.didCreate);
      if (this.props.didCreate) {
        alert("PC Configuration recorded successfully!");
        this.props.history.push("/home",{
          name: name
        });
        window.location.reload(false);
      }
      else {
        alert("Couldn't record PC Configuration!");
      }
     }
      render() {
        const {Price} = this.props.location.state;
        const {totalprice} = this.props.location.state;
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        const {Motherboard} = this.props.location.state;
        const {PSU} = this.props.location.state;
        this.name = name;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.Storage = Storage;
        this.Motherboard = Motherboard;
        this.PSU = PSU;
        this.price = parseFloat(totalprice.toFixed(2));
        let pricesum = parseFloat(totalprice.toFixed(2) - Price.toFixed(2));
        console.log(totalprice);
        return (
          <div className="container">
              <div className="col-lg-12 m-auto">
              <div className="card card-body">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i>Custom PC Configuration Information
              </h2>
              <br></br>
              <br></br>
              <br></br>
              <Link className="link" to={{
                  pathname:'/psu',
                  state:{name: this.name,pricesum4: pricesum,CPU:this.CPU,GPU:this.GPU,RAM:this.RAM,Storage:this.Storage,Motherboard:this.Motherboard,PSU:this.PSU, Price: Price}
              }}> Back to PSU Page </Link>
              <br></br>
              <br></br>
              <br></br>
              <div className="form-group" id="over">
              <img src="checkout.png" ></img>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="form-group">
              <h3 class="text-center mb-3" className="Label"> <b> PC Build Information: 
              
              </b> 
              </h3> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> CPU: {this.CPU}
              
              </b> 
              </h4> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> GPU: {this.GPU}
              
              </b> 
              </h4> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> RAM: {this.RAM}
              
              </b> 
              </h4> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> Storage: {this.Storage}
              
              </b> 
              </h4> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> Motherboard: {this.Motherboard}
              
              </b> 
              </h4>
              <br></br> 
              <h4 class="text-center mb-3" className="Label"> <b> PSU: {this.PSU}
              
              </b> 
              </h4> 
              <br></br>
              <h4 class="text-center mb-3" className="Label"> <b> Total Price: $$ {this.price}
              
              </b> 
              </h4> 
              <br></br>
              <div className="form-group">
                <button type="submit" onClick={this.OrderPC} className="btn">
                Order PC
               </button>
               <br></br>
                </div>
                <br></br>
                <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
              NDXHardware</b> 
              </h5>
              <br></br>
              </div>
           
              </div> 
          </div>
            
          </div>
        );
      }
  }
  const mapStateToProps = state => ({
    createMessage: state.customerOrdersReducer.createMessage,
    didCreate: state.customerOrdersReducer.didCreate,
  })
  
  export default connect(mapStateToProps)(TotalPrice);
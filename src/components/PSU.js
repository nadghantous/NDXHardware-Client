import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrievePSUS} from '../actions/actions';
import { Button } from 'react-bootstrap';
import psusActions from '../redux/actions/powersupplies';
import { connect } from 'react-redux';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class PSU extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.pricesum4 = 0;
        this.CPU = "";
        this.GPU = "";
        this.RAM = "";
        this.Storage = "";
        this.Motherboard = "";
        this.name = "";
      }
      componentDidMount(){
        this.props.dispatch(psusActions.retrievePSUS());
    }
      selectPSU = item => event => {
          event.preventDefault();
          const {name} = this.props.location.state;
          const {CPU} = this.props.location.state;
          const {GPU} = this.props.location.state;
          const {RAM} = this.props.location.state;
          const {Storage} = this.props.location.state;
          const {Motherboard} = this.props.location.state;
          let PSU = item.Pow_Name+" "+item.Pow_Capacity;
          const {pricesum3} = this.props.location.state;
        const {pricesum4} = this.props.location.state;
        let totalprice = parseFloat(item.Price) + parseFloat(pricesum4);
        alert("Power Supply Unit Selected: "+item.Pow_Name+" "+item.Pow_Capacity);
          this.props.history.push("/totalprice",{
            name:name,
            CPU:CPU,
            GPU:GPU,
            RAM:RAM,
            Storage:Storage,
            Motherboard:Motherboard,
            PSU:PSU,
            Price: item.Price,
            totalprice: totalprice
          });
      }
      render() {
        const {pricesum4} = this.props.location.state;
        const {Price} = this.props.location.state;
        let rows = [];
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        const {Motherboard} = this.props.location.state;
        let pricesum = pricesum4 - Price;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.Storage = Storage;
        this.Motherboard = Motherboard;
        this.name = name;
        console.log(pricesum4);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a PSU Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/motherboard',
                state:{name: this.name,pricesum3: pricesum,CPU:this.CPU,GPU:this.GPU,RAM:this.RAM,Storage:this.Storage,Motherboard:this.Motherboard, Price: Price}
            }}> Back to Motherboard Page </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="psu.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.psus} collectionName="power_supply" history={this.props.history} location={this.props.location}>
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
  const mapStateToProps = state =>({  
    psus: state.psuReducer.psus,
  })
  
  export default connect(mapStateToProps)(PSU);
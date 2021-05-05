import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrieveMotherboards} from '../actions/actions';
import motherboardsActions from '../redux/actions/motherboards';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class Motherboard extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.CPU = "";
        this.GPU = "";
        this.RAM = "";
        this.Storage = "";
        this.pricesum3 = 0;
        this.name = "";
      }
      componentDidMount(){
        this.props.dispatch(motherboardsActions.retrieveMotherboards());
    }
    
      selectMotherboard = item => event => {
          event.preventDefault();
          const {name} = this.props.location.state;
          const {CPU} = this.props.location.state;
          const {GPU} = this.props.location.state;
          const {RAM} = this.props.location.state;
          const {Storage} = this.props.location.state;
          const {pricesum3} = this.props.location.state;
          let Motherboard = item.Moth_Name;
          let pricesum4 = parseFloat(item.Price) + parseFloat(pricesum3);
          alert("Motherboard Selected: "+item.Moth_Name);
          this.props.history.push("/psu",{
              name:name,
              CPU:CPU,
              GPU:GPU,
              RAM:RAM,
              Storage:Storage,
              Motherboard:Motherboard,
              Price: item.Price,
              pricesum4: pricesum4
          });
      }
      render() {
        const {pricesum3} = this.props.location.state;
        const {Price} = this.props.location.state;
        let rows = [];
        const {name} = this.props.location.state;
        this.name = name;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.Storage = Storage;
        let pricesum = pricesum3 - Price;
        console.log(pricesum3);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a Motherboard Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/storage',
                state:{name: this.name, pricesum2: pricesum,CPU:this.CPU,GPU:this.GPU,RAM:this.RAM,Storage:this.Storage, Price: Price}
            }}> Back to Storage Page </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="motherboard.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.motherboards} collectionName="motherboard" history={this.props.history} location={this.props.location}>
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
    motherboards: state.motherboardReducer.motherboards,
  })
  
  export default connect(mapStateToProps)(Motherboard);
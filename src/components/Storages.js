import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrieveStorages} from '../actions/actions';
import storagesActions from '../redux/actions/storages';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class Storages extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.CPU = "";
        this.GPU = "";
        this.RAM = "";
        this.pricesum2 = 0;
        this.name = "";
      }
      componentDidMount(){
        this.props.dispatch(storagesActions.retrieveStorages());
    }
      selectStorage = item => event => {
          event.preventDefault();
          const {name} = this.props.location.state;
          const {CPU} = this.props.location.state;
          const {GPU} = this.props.location.state;
          const {RAM} = this.props.location.state;
          let Storage = item.Stor_Name+" "+item.Stor_Capacity;
          const {pricesum2} = this.props.location.state;
          let pricesum3 = parseFloat(item.Price) + parseFloat(pricesum2);
          alert("Storage Selected: "+item.Stor_Name+" "+item.Stor_Capacity);
          this.props.history.push("/motherboard",{
              name:name,
              CPU:CPU,
              GPU:GPU,
              RAM:RAM,
              Storage:Storage,
              Price: item.Price,
              pricesum3: pricesum3
          });
      }
      render() {
        const {Price} = this.props.location.state;
        const {name} = this.props.location.state;
        const {pricesum2} = this.props.location.state;
        this.name = name;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        let rows = [];
        let pricesum = pricesum2 - Price;
        console.log(pricesum2);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a Storage Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/ram',
                state:{name: this.name, pricesum: pricesum,CPU:this.CPU,GPU:this.GPU,RAM:this.RAM, Price: Price}
            }}> Back to RAM Page </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="storage.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.storages} collectionName="storage" history={this.props.history} location={this.props.location}>
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
    storages: state.storageReducer.storages,
  })
  
  export default connect(mapStateToProps)(Storages);
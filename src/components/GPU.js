import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrieveGPUS} from '../actions/actions';
import gpusActions from '../redux/actions/graphicscards';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Logger } from 'mongodb';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class GPU extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.CPU = "";
        this.name = "";
        this.pricesum = 0;
      }
      componentDidMount(){
        this.props.dispatch(gpusActions.retrieveGPUS());
    }
   
      selectGPU = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        let GPU = item.Grap_Name+" "+item.Grap_Memory;
        const {Price} = this.props.location.state;
        let pricesum = parseFloat(item.Price) + parseFloat(Price);
        alert("Graphics Card Selected: "+item.Grap_Name+" "+item.Grap_Memory);
          this.props.history.push("/ram",{
              name:name,
              CPU:CPU,
              GPU:GPU,
              Price: item.Price,
              pricesum: pricesum
          });
      }
      render() {
        const {CPU} = this.props.location.state;
        const {name} = this.props.location.state;
        console.log(name);
        console.log(CPU);
        
        const {price} = this.props.location.state;
        console.log(price);
        const {Price} = this.props.location.state;
        let pricesummation = price - Price;
        this.name = name;
        this.CPU = CPU;
        let rows = [];
        console.log(price);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a GPU Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/custompccpu',
                state:{name: this.name, initialprice: pricesummation,CPU:this.CPU, Price: Price}
            }}> Back to CPU Page </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="gpu.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.graphicscards} collectionName="graphics_cards"  history={this.props.history}
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
  const mapStateToProps = state =>({
    graphicscards: state.gpuReducer.graphicscards,
  })
  
  export default connect(mapStateToProps)(GPU);
import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrieveRAMS} from '../actions/actions';
import ramsActions from '../redux/actions/rams';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class RAM extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.CPU = "";
        this.GPU = "";
        this.name = "";
        this.pricesum = 0;
      }
      componentDidMount(){
        this.props.dispatch(ramsActions.retrieveRAMS());
    }
    
      selectRAM = item => event => {
          event.preventDefault();
          const {name} = this.props.location.state;
          const {CPU} = this.props.location.state;
          const {GPU} = this.props.location.state;
          let RAM = item.RAM_Name+" "+item.RAM_Storage;
          const {pricesum} = this.props.location.state;
          let pricesum2 = parseFloat(item.Price) + parseFloat(pricesum);
          alert("RAM Selected: "+item.RAM_Name+" "+item.RAM_Storage);
          this.props.history.push("/storage",{
              name:name,
              CPU:CPU,
              GPU:GPU,
              RAM:RAM,
              Price:item.Price,
              pricesum2:pricesum2
          });
      }
      render() {
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {Price} = this.props.location.state;
        let rows = [];
        const {name} = this.props.location.state;
        const {pricesum} = this.props.location.state;
        this.name = name;
        this.CPU = CPU;
        this.GPU = GPU;
        let pricesummation = pricesum - Price;
        console.log(pricesum);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a RAM Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/gpu',
                state: {name: this.name,price:pricesummation,CPU:this.CPU,GPU:this.GPU, Price: Price}
            }}> Back to GPU Page </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="ram.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.rams} collectionName="memory" history={this.props.history} location={this.props.location}>
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
    rams: state.ramReducer.rams,
  })
  
  export default connect(mapStateToProps)(RAM);
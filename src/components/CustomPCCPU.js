import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {retrieveCPUS} from '../actions/actions';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import cpusActions from '../redux/actions/processors';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class CustomPCCPU extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: []
        };
        this.name ="";
      }
      componentDidMount(){
        this.props.dispatch(cpusActions.retrieveCPUS());
    }

      selectCPU = item => event => {
          event.preventDefault();
          const {name} = this.props.location.state;
          let CPU = item.Proc_Name + " " + item.Proc_Freq;
          alert("Processor Selected: "+item.Proc_Name+" "+item.Proc_Freq);
          this.props.history.push("/gpu",{
              CPU:CPU,
              Price: item.Price,
              name: name,
          });
      }
      render() {
        let rows = [];
        const {name} = this.props.location.state;
        const {initialprice} = this.props.location.state;
        const {Price} = this.props.location.state;
        let pricesum = initialprice - Price;
        this.name = name;
        console.log(initialprice);
        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please Select a CPU Option
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname: '/home',
                state: {name: this.name, startprice: pricesum}
            }

            } > Back to Home </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="processor.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.processors} collectionName="processors" history={this.props.history} location={this.props.location}>
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
    processors: state.cpuReducer.processors,
  })
  
  export default connect(mapStateToProps)(CustomPCCPU);
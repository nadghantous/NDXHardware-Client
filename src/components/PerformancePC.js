import React, { Component} from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const AntSwitch = withStyles((theme) => ({
    root: {
      width: 60,
      height: 20,
      padding: 0,
      display: 'flex',
      marginLeft: 'auto',
      marginRight:'auto'
    },
    switchBase: {
      padding: 0,
      color: '#0eff00',
      '&$checked': {
        transform: 'translateX(40px)',
        color: '#0eff00',
        '& + $track': {
          opacity: 1,
          backgroundColor: 'blue',
          borderColor: '#5c5c5c',
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${'5c5c5c'}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#5c5c5c',
    },
    checked: {},
  }))(Switch);
  
class PerformancePC extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: [],
        }
        this.name = "";
      }
      componentDidMount(){
    }
   gotoNextPage = (event) => {
         event.preventDefault();
         const {name} = this.props.location.state;
        let answer = this.state.ischecked;
        console.log(answer);
        if(answer === true){
          this.props.history.push("/gamer",{
            name:name
        });
        }
        else{
          this.props.history.push("/nongamer",{
            name:name
        });
        }
   }
   CustomizedSwitches() {
    const [state, setState] = React.useState({
      ischecked: true,
    });
}
     handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
      };
    
    render() {
        const {name} = this.props.location.state;
        this.name = name;
      return (
        <div className="container">
            <div className="col-lg-12 m-auto">
            <div className="card card-body">
            <h2 class="text-center mb-3" className="Label">Performance PC Configuration 
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/home',
                state:{name: this.name}
            }}> Back to Home </Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="performancpcoption.png" ></img>
            </div>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><b>
            Are you a gamer? </b> 
            </h5>  
            <br></br>
            <br></br>
            <div className="middle">
            <div className="switch-container">
              <AntSwitch checked={this.state.ischecked} onChange={this.handleChange} name="ischecked" />
              </div>
              <div>
              <h6 className="left">No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Yes </h6>
              </div>
            
                <br></br>
            </div>
            <br></br>
            <br></br>
            </div>
            <div className="form-group">
                <button type="submit" onClick={this.gotoNextPage} className="btn">
                 Next Page
               </button>
                </div>
                <br></br>
                <h5 class="text-center mb-3" className="Label"><b>
            NDXHardware</b> 
            </h5>
            <br></br>
            </div>
        </div>        
          </div>
      );
    }
    
  }
  export default PerformancePC;

import React, { Component} from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {Slider} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { black } from 'material-ui/styles/colors';
const PrettoSlider = withStyles({
    root: {
      color: '#5c5c5c',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#0eff00',
      border: '2px solid #0eff00',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
        color: black
      },
      color: 'green',
    },
    markLabel:{
      color: '#0eff00',
    },
    
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      color:'#0eff00',
      label: {
        color: black
      }
    },
    track: {
      height: 8,
      borderRadius: 4,
      color:"#0eff00",
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
const minmarks = [
    {
      value: 500,
      label: '500$',
      
    },
    {
      value: 1300,
      label: '1300$',
    },
    {
        value: 2100,
        label: '2100$',
    }
  ];
  const maxmarks = [
    {
      value: 500,
      label: '500$',
    },
    {
      value: 1300,
      label: '1300$',
    },
    {
        value: 2100,
        label: '2100$',
    }
  ];
  function valuetext(value) {
    return `${value} $`;
  }
class BudgetPC extends Component {
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
   gotoPCConfigurations = (event) => {
         event.preventDefault();
         let minprice = parseFloat(this.state.SliderValue);
         let maxprice = parseFloat(this.state.SliderValue2);
         const {name} = this.props.location.state;
         if(minprice > maxprice){
           let tempprice = minprice;
           minprice = maxprice;
           maxprice = tempprice;
         }

       console.log(minprice);
       console.log(maxprice);
       this.props.history.push("/pcconfigurations",{
        minprice: minprice,
        maxprice: maxprice,
        name:name
    });
   }
   handleMinChange = (event,value) => {
      this.setState({SliderValue:value});
    };
    handleMaxChange = (event,value) => {
      this.setState({SliderValue2:value});
    };
    render() {
        const {name} = this.props.location.state;
        this.name = name;
      return (
        <div className="container">
            <div className="col-lg-12 m-auto">
            <div className="card card-body">
            <h2 class="text-center mb-3" className="Label">Budget PC Configuration Page
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/home',
                state:{name: this.name}
            }}> Back to Home </Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="cash.png" ></img>
            </div>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><b>
            What is your minimum budget? </b> 
            </h5>  
            <br></br>
            <br></br>
            <div className="middle">
                <div className="slider-container">
                 <PrettoSlider valueLabelDisplay="auto" onChange={this.handleMinChange} step={1} defaultValue={1300} min={500} max={2100} marks={minmarks}/>
                </div>
                <br></br>
            </div>
            <h5 class="text-center mb-3" className="Label"><b>
            What is your maximum budget? </b> 
            </h5>  
            <br></br>
            <br></br>
            <div className="middle">
                <div className="slider-container">
                 <PrettoSlider valueLabelDisplay="auto" onChange={this.handleMaxChange} step={1} defaultValue={1300} min={500} max={2100} marks={maxmarks}/>
                </div>
                <br></br>
            </div>
            <br></br>
            <br></br>
            </div>
            <div className="form-group">
                <button type="submit" onClick={this.gotoPCConfigurations} className="btn">
                 PC Results
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
  
  export default BudgetPC;
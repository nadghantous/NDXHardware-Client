import React, { Component} from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {Slider} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
      },
      color: 'green',
    },
    active: {},
    markLabel:{
      color: '#0eff00',
    },
    valueLabel: {
      left: 'calc(-50% + 4px)',
      color:'#0eff00',
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
const resolution_marks = [
    {
      value: 1,
      label: '1080p',
    },
    {
      value: 2,
      label: '1440p',
    },
    {
        value: 3,
        label: '4K',
    }
  ];
  const framerate_marks = [
    {
      value: 1,
      label: '30 FPS',
    },
    {
      value: 2,
      label: '60 FPS',
    },
    {
        value: 3,
        label: '120 FPS',
    }
  ];
  function valuetext(value) {
    return `${value} $`;
  }
class Gamer extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.state = {
            data: [],
        }
        this.name = "";
        this.resolution = "";
        this.framerate = "";
      }
      componentDidMount(){
    }
   gotoPCConfigurations = (event) => {
         event.preventDefault();
         let resolution = this.state.SliderValue;
         let framerate = this.state.SliderValue2;
         const {name} = this.props.location.state;
         switch(resolution){
             case 1:
                 this.resolution = "1080p";
                break;
            case 2:
                this.resolution = "1440p";
                break;
            case 3:
                this.resolution = "4K";
                break;
                default:
                    this.resolution = "1440p";
         }
         switch(framerate){
          case 1:
              this.framerate = "30 FPS";
             break;
         case 2:
             this.framerate= "60 FPS";
             break;
         case 3:
             this.framerate = "120 FPS";
             break;
             default:
                 this.framerate = "60 FPS";
      }
          console.log(this.resolution);
          console.log(this.framerate);
          this.props.history.push("/gamerpcs",{
            Resolution:this.resolution,
            Framerate:this.framerate,
            name: name,
        });
         
   }
   handleResolutionChange = (event,value) => {
      this.setState({SliderValue:value});
    };
    handleFramerateChange = (event, value) => {
      this.setState({SliderValue2:value});
    }
    render() {
        const {name} = this.props.location.state;
        this.name = name;
      return (
        <div className="container">
            <div className="col-lg-13 m-auto">
            <div className="card card-body">
            <h2 class="text-center mb-3" className="Label">Gamer Page
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname:'/performancepc',
                state:{name: this.name}
            }}> Back to Previous Page  </Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="gamer.png" ></img>
            </div>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><b>
            What is your ideal resolution for playing videogames? </b> 
            </h5>  
            <br></br>
            <br></br>
            <div className="middle">
                <div className="slider-container">
                 <PrettoSlider valueLabelDisplay="auto" onChange={this.handleResolutionChange} step={1} defaultValue={2} min={1} max={3} marks={resolution_marks}/>
                </div>
                <br></br>
            <br></br>
                <h5 class="text-center mb-3" className="Label"><b>
            What is your ideal framerate for playing video games? </b> 
            </h5>  
            <br></br>
            <br></br>
            <div className="slider-container">
            <PrettoSlider valueLabelDisplay="auto" onChange={this.handleFramerateChange} step={1} defaultValue={2} min={1} max={3} marks={framerate_marks}/>
            </div>
            <br></br>
            <br></br>
            </div>
          
            </div>
            <div className="form-group">
                <button type="submit" onClick={this.gotoPCConfigurations} className="btn">
                 Show PCS
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
  
  export default Gamer;
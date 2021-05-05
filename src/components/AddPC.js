import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import cpusActions from '../redux/actions/processors';
import gpusActions from '../redux/actions/graphicscards';
import ramsActions from '../redux/actions/rams';
import storagesActions from '../redux/actions/storages';
import motherboardsActions from '../redux/actions/motherboards';
import psusActions from '../redux/actions/powersupplies';
import pcsActions from '../redux/actions/desktops';
import 'react-toastify/dist/ReactToastify.css';
import NDXSoftwareDropDown from './NDXSoftwareDropDown';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddPC extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addPCFunct = this.addPCFunct.bind(this);
        this.state = {Config_Name: ''};
        this.CPU = '';
        this.totalprice = 0;
    }
    componentDidMount(){
      this.props.dispatch(cpusActions.retrieveCPUS());
      this.props.dispatch(gpusActions.retrieveGPUS());
      this.props.dispatch(ramsActions.retrieveRAMS());
      this.props.dispatch(storagesActions.retrieveStorages());
      this.props.dispatch(motherboardsActions.retrieveMotherboards());
      this.props.dispatch(psusActions.retrievePSUS());
      this.props.dispatch(pcsActions.retrieveDesktops());
    }
    notifysuccess = () => {
      toast.success("PC Configuration succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add PC Configuration!");
    }
  
    handlePCName = event => {
      event.preventDefault();
      this.setState({Config_Name: event.target.value});
    }
    async addPCFunct(event){
      
      event.preventDefault();
      let errormessage = "";
      let didFind = false;
      const {Config_Name} = this.state;
      let pref_resolution = "1440p";
      let pref_framerate = "60 FPS";
      let category = "";
      let cpu = localStorage.getItem('CPU');
      let cpuprice = parseFloat(localStorage.getItem('cpuprice'));
      let gpu = localStorage.getItem('GPU');
      let gpuprice = parseFloat(localStorage.getItem('gpuprice'));
      let ram = localStorage.getItem('RAM');
      let ramprice = parseFloat(localStorage.getItem('ramprice'));
      let storage = localStorage.getItem('Storage');
      let storageprice = parseFloat(localStorage.getItem('storageprice'));
      let motherboard = localStorage.getItem('Motherboard');
      let mothprice = parseFloat(localStorage.getItem('motherboardprice'));
      let psu = localStorage.getItem('PSU');
      let psuprice = parseFloat(localStorage.getItem('psuprice'));
      let cputype = cpu.substr(11,9);
      let gputype = gpu.substr(15,9);
      console.log(cputype);
      console.log(gputype);
      let totalprice = cpuprice + gpuprice + ramprice + storageprice + mothprice + psuprice;
      totalprice = parseFloat(totalprice.toFixed(2));
      console.log(totalprice);
      switch(cputype){
        case "i9-9900K ": case "i9-8950HK": case "i7 9700K ": case "i7 8700K ": case "i5 9600K ":
          pref_framerate = "120 FPS";
          break;
        case "i7 7700K ": case "i7 6700K ": case "i5 8600K ": case "i5 7600K ":
          pref_framerate = "60 FPS";
          break;
       case "i5 6600K ": case "i3 8350K ": case "i3 7350K ":
         pref_framerate = "30 FPS";
         break;
        default:
          pref_framerate = "60 FPS";
          break;
      }
      switch(gputype){
        case "RTX 3090 ": case "RTX 3080 ": case "RTX 3070 ": case "RTX 2080T": case "RTX 2080 ": 
        pref_resolution = "4K";
        break;
        case "RTX 3060T ": case "RTX 3060 ": case "RTX 2070 ": case "GTX 1080T": case "GTX 1080 ": case "GTX 1070 ":
        pref_resolution = "1440p"
        break;
        case "RTX 2060 ": case "GTX 1060 ": case "GTX 1050T": case "GTX 1050 ": case "GTX 1660T": case "GTX 1660 ": case "GTX 1650 ":
          pref_resolution = "1080p";
        break;
        default:
          pref_resolution = "1440p";
          break;
      }
      if(totalprice >= 850){
        category = "Gamer";
      }
      else if(totalprice < 850 && totalprice >= 650){
        category = "Enterprise Use";
        pref_framerate = "";
        pref_resolution = "";
      }
      else {
        category = "Personal Use";
        pref_framerate = "";
        pref_resolution = "";
      }
      
      console.log(pref_framerate);
      console.log(pref_resolution);
      console.log(category);
      console.log(cpu);
      console.log(cpuprice);
      console.log(gpu);
      console.log(gpuprice);
      console.log(ram);
      console.log(ramprice);
      console.log(storage);
      console.log(storageprice);
      console.log(motherboard);
      console.log(mothprice);
      console.log(psu);
      console.log(psuprice);
       
      const contents = this.props.desktops.forEach((item,key)=> {
        if(item.Config_Name === Config_Name || item.totalprice === totalprice){
         
          if(item.Config_Name === Config_Name){
            didFind = true;
            errormessage = "Error, cannot insert a PC configuration that has the same name of another PC configuration";
          }
          else if(item.totalprice === totalprice){
            didFind = true;
            errormessage = "Error, cannot insert a PC configuration that has the same components of another PC configuration";
          }
        }
     });
     console.log(didFind);
     if(didFind){
       alert(errormessage);
     }
     else{
       let pc_configuration = {
         Config_Name: Config_Name,
         CPU: cpu,
         GPU: gpu,
         RAM: ram,
         Storage: storage,
         Motherboard: motherboard,
         PSU: psu,
         totalprice: totalprice,
         Pref_Resolution: pref_resolution,
         Pref_Framerate: pref_framerate,
         Category: category
       }
       let result = await this.props.dispatch(pcsActions.addPCConfiguration(pc_configuration));
       this.setState({result});
       console.log(this.props.didCreate);
       if (this.props.didCreate) {
         alert("PC configuration successfully created!");
         this.props.history.push("/adminhome");
         window.location.reload(false);
         
       }

    }
  }
    render() {
  
      return (
        <div className="container">
          <div className="col-lg-9 m-auto">
          <div className="card card-body">
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> PC Configuration Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="pc.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Config_Name">PC Configuration Name:</label>
              <input className="form-control"  type="text" onChange={this.handlePCName} id="Config_Name" name="Config_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Config_Name : 'PC Configuration Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
            <label className="Label" for="cpu">Select A CPU:</label>
          </div>
          <NDXSoftwareDropDown id='cpu'  collectionName="processor" data={this.props.processors} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <div className="form-group">
            <label className="Label" for="gpu">Select A GPU:</label>
          </div>
          <NDXSoftwareDropDown id='gpu' collectionName="graphics_card" data={this.props.graphicscards} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <div className="form-group">
            <label className="Label" for="ram">Select A RAM:</label>
          </div>
          <NDXSoftwareDropDown id='ram' collectionName="memory" data={this.props.rams} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <div className="form-group">
            <label className="Label" for="storage">Select A Storage Device:</label>
          </div>
          <NDXSoftwareDropDown id='storage' collectionName="storage" data={this.props.storages} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <div className="form-group">
            <label className="Label" for="motherboard">Select A Motherboard:</label>
          </div>
          <NDXSoftwareDropDown id='motherboard' collectionName="motherboard" data={this.props.motherboards} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <div className="form-group">
            <label className="Label" for="psu">Select A PSU:</label>
          </div>
          <NDXSoftwareDropDown id='psu' collectionName="power_supply" data={this.props.psus} location={this.props.location} history={this.props.history}></NDXSoftwareDropDown>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addPCFunct} className="btn">
              Insert PC
            </button>
          <br></br>
          <br></br>
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.pcReducer.addMessage,
    didCreate: state.pcReducer.didCreate,
    processors: state.cpuReducer.processors,
    graphicscards: state.gpuReducer.graphicscards,
    rams: state.ramReducer.rams,
    storages: state.storageReducer.storages,
    motherboards: state.motherboardReducer.motherboards,
    psus: state.psuReducer.psus,
    desktops: state.pcReducer.desktops,
  })
  
  export default connect(mapStateToProps)(AddPC);
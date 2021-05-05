import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {findUser,retrieveUsers} from '../actions/actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class MainMenuAdmin extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
      }
     
      componentDidMount(){
    }

  gotoAddCPU = (event) => {
     event.preventDefault();
     this.props.history.push("/addcpu");
  }
  gotoAddGPU = (event) => {
    event.preventDefault();
    this.props.history.push("/addgpu");
 }
 gotoAddRAM = (event) => {
    event.preventDefault();
    this.props.history.push("/addram");
 }
 gotoAddStorage = (event) => {
    event.preventDefault();
    this.props.history.push("/addstorage");
 }
 gotoAddMotherboard = (event) => {
    event.preventDefault();
    this.props.history.push("/addmotherboard");
 }
 gotoAddPSU = (event) => {
    event.preventDefault();
    this.props.history.push("/addpsu");
 }
 gotoAddPCConfigurations = (event) => {
    event.preventDefault();
    this.props.history.push("/addpcconfigurations");
 }
    render() {
      return (
        
        <div className="container">
          <div className="col-lg-12 m-auto">
            <div className="card card-body">
              <br></br>
              <br></br>
            <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i>Welcome to NDXHardware Admin
            </h2>
            <br></br>
            <br></br>
            <Link className="link" to="/loginadmin"> Logout</Link>
            <br></br>
            <br></br>
            <div className="form-group" id="over">
            <img src="home.png" ></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
            <h4 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> <b>
            Keep every database up to date. This is the the main priority of NDXHardware to satisfy customers whether gamers or non-gamers
            </b> 
            </h4> 
            </div>
            <br></br>
              <br></br>
              <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group">
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            Please select an option to insert a component in the database</b> 
            </h5>  
            <br></br>
            
            </div>
            <br></br>
        <br></br>
            <div className="form-group">
               <br></br>
               <br></br>
               <div className="form-group" >
                 <div className="cpu" onClick={this.gotoAddCPU}>
                 <img  class="proc" src="processor.png"></img>
        <h3 class="text-center mb-3" className="text">Add CPU</h3>
        <br></br>
        <p className="text">With new processors that are in the market, through this option users can stay up to date when you add the new processor in the database.
        </p>
                 </div>
              
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="gpu" onClick={this.gotoAddGPU} >
        <img class="grap_card" src="gpu.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add GPU</h3>
        <br></br>
        <p className="text"> With new graphics cards that are in the market, through this option users can stay up to date when you add the new graphics card in the database.
        </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="ram" onClick={this.gotoAddRAM} >
        <img class="mem" src="ram.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add RAM</h3>
        <br></br>
        <p className="text"> With new RAM units that are in the market, through this option users can stay up to date when you add the new RAM unit in the database.
        </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="storage" onClick={this.gotoAddStorage} >
        <img class="stor" src="storage.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add Storage</h3>
        <br></br>
        <p className="text"> With new Storage units that are in the market, through this option users can stay up to date when you add the new Storage unit in the database.
        </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="motherboard" onClick={this.gotoAddMotherboard} >
        <img class="moth" src="motherboard.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add Motherboard</h3>
        <br></br>
        <p className="text"> With new Motherboard units that are in the market, through this option users can stay up to date when you add the new Motherboard unit in the database.
        </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="psu" onClick={this.gotoAddPSU} >
        <img class="pow" src="psu.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add PSU</h3>
        <br></br>
        <p className="text"> With new PSUs that are in the market, through this option users can stay up to date when you add the new PSU in the database.
        </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="pcconfig" onClick={this.gotoAddPCConfigurations} >
        <img class="config" src="pc.png"></img>
        <br></br>
        <h3 class="text-center mb-3" className="text">Add PC Configuration</h3>
        <br></br>
        <p className="text"> Through this option gamers and non gamers can choose different pre-built PC configurations recommended to them on the go depending on their needs and requirements by a adding a complete PC configuration in the database. 
        </p>
        </div>
               </div>
               <br></br>
               <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
               <hr></hr>
            
            </div>
           
              <br></br>
              <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            </div> 
        </div>
            
        </div>
      );
    }
  }
  export default MainMenuAdmin;
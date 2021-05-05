import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import gpusActions from '../redux/actions/graphicscards';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddGPU extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addGPUFunct = this.addGPUFunct.bind(this);
        this.state = {Grap_Name: '', Grap_Memory: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(gpusActions.retrieveGPUS());
         let counter = 1;
          const contents = this.props.graphicscards.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("GPU succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add GPU!");
    }
  
    handleGPUName = event => {
      event.preventDefault();
      this.setState({Grap_Name: event.target.value});
    }
    handleGPUMemory = event =>{
        event.preventDefault();
        this.setState({Grap_Memory: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addGPUFunct(event){
      
      event.preventDefault();
      let error = false;
      let counter = 1;
      
      const {Grap_Name} = this.state;
      const {Grap_Memory} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.graphicscards.forEach((item,key)=> {
         if(item.Grap_Name.toLowerCase() === Grap_Name.toLowerCase()){
           error = true;
         }
          counter = counter + 1;
      });
      if(error){
        alert("Error, cannot insert a GPU that has the same name of another GPU component!")
      }
      else{
        let gpu = {
          Grap_ID: counter,
          Grap_Name: Grap_Name,
          Grap_Memory: Grap_Memory,
          Price: price,
        }
        let result = await this.props.dispatch(gpusActions.addGPU(gpu));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The GPU has been succesfully added!");
          this.props.history.push("/adminhome");
          window.location.reload(false);
          
        }
        else {
         this.notifyerror();
        }
      }
      
     
    }
    render() {
  
      return (
        <div className="container">
          <div className="col-lg-9 m-auto">
          <div className="card card-body">
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> GPU Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="gpu.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Grap_Name">Graphics Card Name:</label>
              <input className="form-control"  type="text" onChange={this.handleGPUName} id="Grap_Name" name="Grap_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Grap_Name : 'Graphics Card Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Grap_Memory">Graphics Card Memory Capacity:</label>
              <input className="form-control" type="text" id="Grap_Memory" name="Grap_Memory" onChange={this.handleGPUMemory} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Grap_Memory: 'Memory Size'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">Graphics Card Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addGPUFunct} className="btn">
              Insert GPU
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.gpuReducer.addMessage,
    didCreate: state.gpuReducer.didCreate,
    graphicscards: state.gpuReducer.graphicscards,

  })
  
  export default connect(mapStateToProps)(AddGPU);
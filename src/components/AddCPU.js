import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import cpusActions from '../redux/actions/processors';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddCPU extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addCPUFunct = this.addCPUFunct.bind(this);
        this.state = {Proc_Name: '', Proc_Freq: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(cpusActions.retrieveCPUS());
         let counter = 1;
          const contents = this.props.processors.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("CPU succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add CPU!");
    }
  
    handleCPUName = event => {
      event.preventDefault();
      this.setState({Proc_Name: event.target.value});
    }
    handleCPUFreq = event =>{
        event.preventDefault();
        this.setState({Proc_Freq: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addCPUFunct(event){
      let error = false;
      event.preventDefault();
      let counter = 1;
      
      const {Proc_Name} = this.state;
      const {Proc_Freq} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.processors.forEach((item,key)=> {
          if(item.Proc_Name.toLowerCase() === Proc_Name.toLowerCase()){
            error = true;
          }
          counter = counter + 1;
      });
      console.log(error);
      if(error){
        alert("Error, cannot insert a CPU that has the same name of another CPU component!");
      }
      else{
        let cpu = {
          Proc_ID: counter,
          Proc_Name: Proc_Name,
          Proc_Freq: Proc_Freq,
          Price: price,
        }
  
        let result = await this.props.dispatch(cpusActions.addCPU(cpu));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The CPU has been succesfully added!");
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> CPU Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="processor.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Proc_Name">Processor Name:</label>
              <input className="form-control"  type="text" onChange={this.handleCPUName} id="Proc_Name" name="Proc_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Proc_Name : 'Processor Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Proc_Freq">Processor Frequency:</label>
              <input className="form-control" type="text" id="Proc_Freq" name="Proc_Freq" onChange={this.handleCPUFreq} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Proc_Freq : 'Processor Frequency'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">Processor Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addCPUFunct} className="btn">
              Insert CPU
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.cpuReducer.addMessage,
    didCreate: state.cpuReducer.didCreate,
    processors: state.cpuReducer.processors,

  })
  
  export default connect(mapStateToProps)(AddCPU);
import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import psusActions from '../redux/actions/powersupplies';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddPSU extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addPSUFunct = this.addPSUFunct.bind(this);
        this.state = {Pow_Name: '', Pow_Capacity: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(psusActions.retrievePSUS());
         let counter = 1;
          const contents = this.props.psus.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("PSU succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add PSU!");
    }
  
    handlePSUName = event => {
      event.preventDefault();
      this.setState({Pow_Name: event.target.value});
    }
    handlePSUCapacity = event =>{
        event.preventDefault();
        this.setState({Pow_Capacity: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addPSUFunct(event){
      
      event.preventDefault();
      let counter = 1;
      let error = false;
     
      const {Pow_Name} = this.state;
      const {Pow_Capacity} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.psus.forEach((item,key)=> {
        if(item.Pow_Name.toLowerCase() === Pow_Name.toLowerCase()){
          error = true;
        }
          counter = counter + 1;
      });
      if(error){
        alert("Error, cannot insert a PSU that has the same name of another PSU component!");
      }
      else{
        let psu = {
          Pow_ID: counter,
          Pow_Name: Pow_Name,
          Pow_Capacity: Pow_Capacity,
          Price: price,
        }
        let result = await this.props.dispatch(psusActions.addPSU(psu));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The PSU has been succesfully added!");
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> PSU Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="psu.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Pow_Name">Power Supply Name:</label>
              <input className="form-control"  type="text" onChange={this.handlePSUName} id="Pow_Name" name="Pow_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Pow_Name : 'Power Supply Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Pow_Capacity">Power Supply Capacity</label>
              <input className="form-control" type="text" id="Pow_Capacity" name="Pow_Capacity" onChange={this.handlePSUCapacity} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Pow_Capacity: 'Power Supply Capacity'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">PSU Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addPSUFunct} className="btn">
              Insert PSU
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.psuReducer.addMessage,
    didCreate: state.psuReducer.didCreate,
    psus: state.psuReducer.psus,

  })
  
  export default connect(mapStateToProps)(AddPSU);
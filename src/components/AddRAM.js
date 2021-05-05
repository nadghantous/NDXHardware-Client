import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import ramsActions from '../redux/actions/rams';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddRAM extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addRAMFunct = this.addRAMFunct.bind(this);
        this.state = {RAM_Name: '', RAM_Storage: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(ramsActions.retrieveRAMS());
         let counter = 1;
          const contents = this.props.rams.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("RAM succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add RAM!");
    }
  
    handleRAMName = event => {
      event.preventDefault();
      this.setState({RAM_Name: event.target.value});
    }
    handleRAMStorage = event =>{
        event.preventDefault();
        this.setState({RAM_Storage: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addRAMFunct(event){
      
      event.preventDefault();
      let error = false;
      let counter = 1;
      
      const {RAM_Name} = this.state;
      const {RAM_Storage} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.rams.forEach((item,key)=> {
        if(item.RAM_Name.toLowerCase() === RAM_Name.toLowerCase()){
          error = true;
        }
          counter = counter + 1;
      });
      if(error){
        alert("Error, cannot insert a RAM component that has the same name of another RAM component!")
      }
      else{
        let ram = {
          RAM_ID: counter,
          RAM_Name: RAM_Name,
          RAM_Storage: RAM_Storage,
          Price: price,
        }
        let result = await this.props.dispatch(ramsActions.addRAM(ram));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The RAM has been succesfully added!");
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> RAM Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="ram.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="RAM_Name">RAM Name:</label>
              <input className="form-control"  type="text" onChange={this.handleRAMName} id="RAM_Name" name="RAM_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.RAM_Name : 'RAM Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="RAM_Storage">RAM Storage Capacity:</label>
              <input className="form-control" type="text" id="RAM_Storage" name="RAM_Storage" onChange={this.handleRAMStorage} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.RAM_Storage: 'RAM Storage Capacity'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">RAM Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addRAMFunct} className="btn">
              Insert RAM
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.ramReducer.addMessage,
    didCreate: state.ramReducer.didCreate,
    rams: state.ramReducer.rams,

  })
  
  export default connect(mapStateToProps)(AddRAM);
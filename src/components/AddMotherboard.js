import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import motherboardsActions from '../redux/actions/motherboards';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddMotherboard extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addMotherboardFunct = this.addMotherboardFunct.bind(this);
        this.state = {Moth_Name: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(motherboardsActions.retrieveMotherboards());
         let counter = 1;
          const contents = this.props.motherboards.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("Motherboard succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add Motherboard!");
    }
  
    handleMotherboardName = event => {
      event.preventDefault();
      this.setState({Moth_Name: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addMotherboardFunct(event){
      
      event.preventDefault();
      let counter = 1;
      let error = false;
     
      const {Moth_Name} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.motherboards.forEach((item,key)=> {
        if(item.Moth_Name.toLowerCase() === Moth_Name.toLowerCase()){
          error = true;
        }
          counter = counter + 1;
      });
      if(error){
        alert("Error, cannot insert a Motherboard that has the same name of another Motherboard component!")
      }
      else{
        let motherboard = {
          Moth_ID: counter,
          Moth_Name: Moth_Name,
          Price: price,
        }
        let result = await this.props.dispatch(motherboardsActions.addMotherboard(motherboard));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The Motherboard has been succesfully added!");
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Motherboard Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="motherboard.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Moth_Name">Motherboard Name:</label>
              <input className="form-control"  type="text" onChange={this.handleMotherboardName} id="Moth_Name" name="Moth_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Moth_Name : 'Motherboard Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">Motherboard Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addMotherboardFunct} className="btn">
              Insert Motherboard
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
    addMessage: state.motherboardReducer.addMessage,
    didCreate: state.motherboardReducer.didCreate,
    motherboards: state.motherboardReducer.motherboards,

  })
  
  export default connect(mapStateToProps)(AddMotherboard);
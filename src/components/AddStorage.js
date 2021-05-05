import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import storagesActions from '../redux/actions/storages';
import 'react-toastify/dist/ReactToastify.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class AddStorage extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.addStorageFunct = this.addStorageFunct.bind(this);
        this.state = {Stor_Name: '', Stor_Capacity: '', Price: ''};
    }
    componentDidMount(){
         this.props.dispatch(storagesActions.retrieveStorages());
         let counter = 1;
          const contents = this.props.storages.forEach((item,key)=> {
          counter = counter + 1;
      });
      console.log(counter);
    }
    notifysuccess = () => {
      toast.success("Storage device succesfully added!");
    }
    notifyerror = () => {
      toast.error("Failed to add Storage device!");
    }
  
    handleStorageName = event => {
      event.preventDefault();
      this.setState({Stor_Name: event.target.value});
    }
    handleStorageCapacity = event =>{
        event.preventDefault();
        this.setState({Stor_Capacity: event.target.value});
    }
    handlePrice = event => {
      event.preventDefault();
      this.setState({Price: event.target.value});
    }
    async addStorageFunct(event){
      
      event.preventDefault();
      let counter = 1;
      let error = false;
      
      const {Stor_Name} = this.state;
      const {Stor_Capacity} = this.state;
      const {Price} = this.state;
      let price = Math.round(Price*100)/100;
      const contents = this.props.storages.forEach((item,key)=> {
        if(item.Stor_Name.toLowerCase() === Stor_Name.toLowerCase()){
          error = true;
        }
          counter = counter + 1;
      });
      if(error){
        alert("Error, cannot insert a Storage component that has the same name of another Storage component!")
      }
      else{
        let storage = {
          Stor_ID: counter,
          Stor_Name: Stor_Name,
          Stor_Capacity: Stor_Capacity,
          Price: price,
        }
        let result = await this.props.dispatch(storagesActions.addStorage(storage));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("The Storage device has been succesfully added!");
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Storage Device Insertion
            </h2>
            <br></br>
            <Link className="link" to="/adminhome"> Go back to Main Menu</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="storage.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="Stor_Name">Storage Device Name:</label>
              <input className="form-control"  type="text" onChange={this.handleStorageName} id="Stor_Name" name="Stor_Name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Stor_Name : 'Storage Device Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Stor_Capacity">Storage Device Capacity:</label>
              <input className="form-control" type="text" id="Stor_Capacity" name="Stor_Capacity" onChange={this.handleStorageCapacity} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Stor_Capacity: 'Storage Device Capacity'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="Price">Storage Device Price:</label>
              <input className="form-control" type="text" id="Price" name="Price" onChange={this.handlePrice} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Price : 'Price'} required  size="10"/><br/>
            </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.addStorageFunct} className="btn">
              Insert Storage
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    addMessage: state.storageReducer.addMessage,
    didCreate: state.storageReducer.didCreate,
    storages: state.storageReducer.storages,

  })
  
  export default connect(mapStateToProps)(AddStorage);
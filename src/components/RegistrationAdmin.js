import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import adminsActions from "../redux/actions/admins";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class RegistrationAdmin extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.AdminRegistrationFunction = this.AdminRegistrationFunction.bind(this);
        this.state = {name: '', password: '', age: '',store_name: ''};
    }
    componentDidMount(){
      toast.success("By becoming an admin, with your help, we can flourish with new PC configurations and components!")
    }
    notifysuccess = () => {
      toast.success("Account succesfully created!");
    }
    notifyerror = () => {
      toast.error("Failed to create account! ");
    }
  
    handleNameChange = event => {
      event.preventDefault();
      this.setState({name: event.target.value});
    }
    handlePasswordChange = event =>{
        event.preventDefault();
        this.setState({password: event.target.value});
    }
    handleAgeChange = event => {
      event.preventDefault();
      this.setState({age: event.target.value});
    }
    handleStoreNameChange = event => {
      event.preventDefault();
      this.setState({store_name: event.target.value});
    }
    async AdminRegistrationFunction(event){
      
      event.preventDefault();
      const {name} = this.state;
      const {password} = this.state;
      const {age} = this.state;
      const {store_name} = this.state;
  
      let admin_account = {
        name: name,
        password: password,
        age: age,
        store_name: store_name,
      }
      let result = await this.props.dispatch(adminsActions.createAdmin(admin_account));
      this.setState({result});
      console.log(this.props.didCreate);
      if (this.props.didCreate) {
        alert("Your admin account has been succesfully created!");
        this.props.history.push("/loginadmin");
        window.location.reload(false);
        
      }
      else {
       this.notifyerror();
      }
    }
    render() {
  
      return (
        <div className="container">
          <div className="col-lg-9 m-auto">
          <div className="card card-body">
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Account Creation
            </h2>
            <br></br>
            <Link className="link" to="/loginadmin"> Go back to Login</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="codecloud.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="name">Admin Name:</label>
              <input className="form-control"  type="text" onChange={this.handleNameChange} id="name" name="name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.name : 'Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="password">Admin Password:</label>
              <input className="form-control" type="text" id="password" name="password" onChange={this.handlePasswordChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.password : 'Password'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="age">Admin Age:</label>
              <input className="form-control" type="text" id="age" name="age" onChange={this.handleAgeChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.age : 'Age'} required  size="10"/><br/>
            </div>
          <div className="form-group">
            <label className="Label" for="store_name">Admin Store Name:</label>
            <input className="form-control" type="text" id="store_name" name="store_name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.store_name : 'Store Name'} onChange={this.handleStoreNameChange} required  size="10"/><br/>
          </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.AdminRegistrationFunction} className="btn">
              Submit
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    createMessage: state.adminsReducer.createMessage,
    didCreate: state.adminsReducer.didCreate,
  })
  
  export default connect(mapStateToProps)(RegistrationAdmin);
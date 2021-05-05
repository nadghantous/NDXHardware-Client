import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import {createUser} from '../actions/actions';
import usersActions from "../redux/actions/users";
import { connect } from "react-redux";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class Registration extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.UserRegistrationFunction = this.UserRegistrationFunction.bind(this);
        this.state = {name: '', password: '', age: '',address: '', job: ''};
    }
    componentDidMount(){
      this.props.dispatch(usersActions.retrieveUsers());
      toast.success("Be a part of our family. Family comes first!")
      
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
    handleAddress = event => {
      event.preventDefault();
      this.setState({address: event.target.value});
    }
    handleJob = event => {
      event.preventDefault();
      this.setState({job: event.target.value});
    }
    async UserRegistrationFunction(event){
      
      event.preventDefault();
      let didFind = false;
      const {name} = this.state;
      const {password} = this.state;
      const {age} = this.state;
      const {address} = this.state;
      const {job} = this.state;
      
      const contents = this.props.users.forEach((item,key)=> {
         if(item.name === name){
           didFind = true;
         }
      });
      console.log(didFind);
      if(didFind){
        alert("Error, a user with this username already exists in our database, Please choose a different username!");
        this.setState({name: ''});
      }
      else{
        let user_account = {
          name: name,
          password: password,
          age: age,
          address: address,
          job: job,
        }
        let result = await this.props.dispatch(usersActions.createUser(user_account));
        this.setState({result});
        console.log(this.props.didCreate);
        if (this.props.didCreate) {
          alert("Your account has been succesfully created!");
          this.props.history.push("/home",{
            name: name
          });
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
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Account Creation
            </h2>
            <br></br>
            <Link className="link" to="/login"> Go back to Login</Link>
            <br></br>
            <div className="form-group" id="over">
            <img src="codecloud.png" ></img>
            </div>
            <div className="form-group ">
              <label className="Label" for="name">Name:</label>
              <input className="form-control"  type="text" onChange={this.handleNameChange} id="name" name="name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.name : 'Name'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="password">Password:</label>
              <input className="form-control" type="text" id="password" name="password" onChange={this.handlePasswordChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.password : 'Password'} required  size="10"/><br/>
            </div>
            <div className="form-group">
              <label className="Label" for="age">Age:</label>
              <input className="form-control" type="text" id="age" name="age" onChange={this.handleAgeChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.age : 'Age'} required  size="10"/><br/>
            </div>
          <div className="form-group">
            <label className="Label" for="address">Address:</label>
            <input className="form-control" type="text" id="address" name="address" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.address : 'Address'} onChange={this.handleAddress} required  size="10"/><br/>
          </div>
          <div className="form-group">
            <label className="Label" for="job">Job:</label>
            <input className="form-control" type="text" id="job" name="job" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.job : 'Hobby'} required size="10" onChange={this.handleJob}/><br/>
          </div>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.UserRegistrationFunction} className="btn">
              Submit
            </button>
          
          </div>
         </div>
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    createMessage: state.userReducer.createMessage,
    didCreate: state.userReducer.didCreate,
    users: state.userReducer.users,
    isFound: state.userReducer.isFound,
  })
  
  export default connect(mapStateToProps)(Registration);
import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import { createUser, updateUser } from '../actions/actions';


class UserForm extends Component {

  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.UserRegistrationFunction = this.UserRegistrationFunction.bind(this);
    this.state = {name: '', password: '', age: '',address: '', job: ''}
  }

  componentDidMount(){
     
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
  UserRegistrationFunction = (event) => {

    event.preventDefault();
    const {name} = this.state;
    const {password} = this.state;
    const {age} = this.state;
    const {address} = this.state;
    const {job} = this.state;
    let id = '';


    if(this.props.location.state === undefined)
    {
      createUser({name,password,age,address,job})
      .then((res) =>{
         this.props.history.push("/");
         alert("User succesfully created!")
      })
      .catch((err) =>{
         alert(err);
      });
    }else{
      id = this.props.location.state.id;
      updateUser({id,name,password,age,address,job})
      .then((res) =>{
        this.props.history.push("/");
        alert("User succesfully updated!");
     })
     .catch((err) =>{
        alert(err);
     });
    }
        
  }
  render() {

    return (
      <div className="App">
        <h1>User Account Form</h1>
        <Link to="/"> Go back to Login </Link>
        <form onSubmit={this.UserRegistrationFunction} method="POST" className="">
          <div className="form-group row">
            <label className="form-label" for="name">Name:</label>
            <input className="form-control"  type="text" onChange={this.handleNameChange} id="name" name="name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.name : 'Name'} required  size="10"/><br/>
          </div>
          <div className="form-group row">
            <label className="form-label" for="password">Password:</label>
            <input className="form-control" type="text" id="password" name="password" onChange={this.handlePasswordChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.password : 'Password'} required  size="10"/><br/>
          </div>
          <div className="form-group row">
            <label className="form-label" for="age">Age:</label>
            <input className="form-control" type="text" id="age" name="age" onChange={this.handleAgeChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.age : 'Age'} required  size="10"/><br/>
          </div>
        <div className="form-group row">
          <label className="form-label" for="address">Address:</label>
          <input className="form-control" type="text" id="address" name="address" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.address : 'Address'} onChange={this.handleAddress} required  size="10"/><br/>
        </div>
        <div className="form-group row">
          <label className="form-label" for="job">Job:</label>
          <input className="form-control" type="text" id="job" name="job" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.job : 'Hobby'} required size="10" onChange={this.handleJob}/><br/>
        </div>
          <input className="btn bg-primary text-light" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default UserForm;
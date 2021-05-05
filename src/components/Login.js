import React, { Component } from 'react';
import '../App.css';
import {Link} from  'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {findUser,retrieveUsers,createUser} from '../actions/actions';
import { Button, Container } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';
import usersActions from '../redux/actions/users'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NDXSoftwareDropDown from './NDXSoftwareDropDown';
class Login extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.UserAuthenticationFunction = this.UserAuthenticationFunction.bind(this);
        this.state = {
         name: '',
         password: '',
         data: [],
         loading: true,
      }
        this.loggedUser = {
          name: ""
        }
        
      }
      componentDidMount(){
        this.props.dispatch(usersActions.retrieveUsers());
        
    }
    handleNameChange = (event) => {
      event.preventDefault();
      this.setState({name: event.target.value});
    }
    handlePasswordChange = (event) =>{
        event.preventDefault();
        this.setState({password: event.target.value});
    }
  
   async GoogleSignUp(res) {  
      let didFind = false;
          const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email, 
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
          };
          let name = googleresponse.Name;
          let password = googleresponse.email;
          debugger;
          const contents = this.props.users.forEach((item,key)=> {
            if(item.name === name){
              didFind = true;
            }
         });
         console.log(didFind);
         if(didFind){
          alert("Welcome "+name);
          this.props.history.push("/home",{
            name: name
          });
        }
        else{
          let user_account = {
            name: name,
            password: password,
            age: 0,
            address: '',
            job: '',
          }
          let result = await this.props.dispatch(usersActions.createUser(user_account));
          this.setState({result});
          console.log(this.props.didCreate);
          if (this.props.didCreate) {
            alert("Your account has been succesfully created with Google!");
            this.props.history.push("/home",{
              name: name
            });
            window.location.reload(false);
            
          }
          else {
           this.notifyerror();
          }
        }
          
        };
      
      
    UserAuthenticationFunction = (event) => {
      event.preventDefault();
      let authenticate = false;
      const {name} = this.state;
      const {password} = this.state;

      const contents = this.props.users.forEach((item,key) => {
        console.log(authenticate);
        if(item.password === password && item.name === name){
          authenticate = true;
          this.props.history.push("/home",{
            name: item.name
          });
        }
      });
     if(authenticate === false){
       alert("Incorrect Username/Password! Please try again!")
     } 
     
    };
    render() {
      const responseGoogle = (response) => {
              console.log(response);
              var res = response.profileObj;
              console.log(res);
              debugger;
              this.GoogleSignUp(response);
            }
            console.log(this.props.continents);
      return (
         <div className="container">
         
          <div className="col-lg-7 m-auto" id="input1">
          <div className="card card-body">
            <br></br>
          <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> NDXHardware
          </h2>
          <br></br>
          <div className="form-group" id="over">
          <img src="greengamingpc.png" ></img>
          </div>
          <div className="form-group">
          <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
          For The Gamers</b> 
          </h5>  
          </div>
          <div className="form-group">   
          <label className="Label" for="name">User Name:</label>
          <input class="form-control"  type="name" onChange={this.handleNameChange} id="name" name="name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.name : 'Name'} required  size="10"/>    
          <br/>
          </div>
          <div className="form-group">
            <label className="Label" for="password">Password/Email:</label>
            <input className="form-control" type="password" id="password" name="password" onChange={this.handlePasswordChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.password : 'Password'} required  size="10"/><br/>
          </div>
        
          <div className="form-group">
            <label className="Label" for="region">Select A Region:</label>
          </div>
          <NDXSoftwareDropDown collectionName="continents"></NDXSoftwareDropDown>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.UserAuthenticationFunction} className="btn">
            Login
          </button>
          <br></br>
          <GoogleLogin
                clientId="185553280090-78vffcbbv7j7jadv4p77hfa6hjqtbk72.apps.googleusercontent.com"
                buttonText="Google Sign Up"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} 
                className="btn2"
                ></GoogleLogin>
                <br></br>
          <div className="form-group">
          <Link className="link"  to="/registration">Don't Have an Account? Sign Up!!</Link>
          </div>
          <br></br>
          <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
          NDXHardware</b> 
          </h5>
          <br></br>
          <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
          Developed by NDXSoftware</b> 
          </h5>
          </div> 
        </div>
         </div>
         
        
      );
    }
  }
  const mapStateToProps = state =>({
    users: state.userReducer.users,
    createMessage: state.userReducer.createMessage,
    didCreate: state.userReducer.didCreate,
  })
  
  export default connect(mapStateToProps)(Login);
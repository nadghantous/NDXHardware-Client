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
import adminsActions from '../redux/actions/admins'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NDXSoftwareDropDown from './NDXSoftwareDropDown';
class LoginAdmin extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.AdminAuthenticationFunction = this.AdminAuthenticationFunction.bind(this);
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
        this.props.dispatch(adminsActions.retrieveAdmins());
        
    }
    handleNameChange = (event) => {
      event.preventDefault();
      this.setState({name: event.target.value});
    }
    handlePasswordChange = (event) =>{
        event.preventDefault();
        this.setState({password: event.target.value});
    }
  
    GoogleSignUp(res) {  
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
          const {user} = findUser({data: googleresponse.Name});
          console.log(user);
          findUser({data: googleresponse.Name}).then(res =>{ 
            this.setState({data:res});
            console.log(res);
            if(res.data === null){
              createUser({name,password})
              .then((result) =>{
                 this.props.history.push("/");
                 alert("Your account has been succesfully created using Google!. Your user name is "+name+" and your password is your email "+password);
                 window.location.reload(false);
              })
              .catch((err) =>{
                 alert(err);
              });
            }
            else{
              console.log("Failed to create an account using Google. Account with the user name already exists! ");
            }
        }).catch(err => {
            alert('Failed to fetch users! '+err);
        });
          
        };
      
      
    AdminAuthenticationFunction = (event) => {
      event.preventDefault();
      let authenticate = false;
      const {name} = this.state;
      const {password} = this.state;

      const contents = this.props.admins.forEach((item,key) => {
        console.log(authenticate);
        if(item.password === password && item.name === name){
          authenticate = true;
          this.props.history.push("/adminhome");
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
          For The Admins</b> 
          </h5>  
          </div>
          <div className="form-group">   
          <label className="Label" for="name">Admin User Name:</label>
          <input class="form-control"  type="name" onChange={this.handleNameChange} id="name" name="name" placeholder={(this.props.location.state !== undefined) ? this.props.location.state.name : 'Name'} required  size="10"/>    
          <br/>
          </div>
          <div className="form-group">
            <label className="Label" for="password">Admin Password/Email:</label>
            <input className="form-control" type="text" id="password" name="password" onChange={this.handlePasswordChange} placeholder={(this.props.location.state !== undefined) ? this.props.location.state.password : 'Password'} required  size="10"/><br/>
          </div>
          <div className="form-group">
            <label className="Label" for="password">Select A Region:</label>
          </div>
          <NDXSoftwareDropDown collectionName="continents"></NDXSoftwareDropDown>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.AdminAuthenticationFunction} className="btn">
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
          <Link className="link"  to="/adminregistration">Don't Have an Account? Sign Up!!</Link>
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
    admins: state.adminsReducer.admins,
  })
  
  export default connect(mapStateToProps)(LoginAdmin);
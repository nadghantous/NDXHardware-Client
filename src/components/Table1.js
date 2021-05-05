import React, {Component} from 'react';
import { retrieveUsers,createUser,updateUser,deleteUser } from "../actions/actions";
import UserForm from '../components/UserForm';
import '../css/Table.css';
class Table1 extends Component{
    constructor(){
        super();
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.state = {
            data: []
        };
    }
    
    redirectToHome = () => {
        const { history } = this.props;
        if(history) history.push('/UserForm');
      } 
    componentDidMount(){
        this.fetchUsers();
    }
    fetchUsers = () => {
        retrieveUsers().then(res =>{ 
            this.setState({data:res});
            alert('Successfully Retrieved!');
        }).catch(err => {
            alert('Failed to fetch users! '+err);
        });
      }
      deleteRecord = (event) => {
          event.preventDefault();
          let id = event.target.id;

        deleteUser({id: id})
        .then(response => {
            alert('Succesfully Deleted!');
            this.fetchUsers();
        }).catch(err => {
            alert('Account failed to delete !' +err);
        });
      }
      fillForm = item => event => {
        
        event.preventDefault();
        this.props.history.push("/UserForm", {
          name: item.name,
          password: item.password,
          age: item.age,
          address: item.address,
          job: item.job
        });
      }
      updateUserInfo = (event) =>{
        event.preventDefault();
         const{name} = this.state;
            const{password} = this.state;
            const{age} = this.state;
            const{address} = this.state;
            const{job} = this.state;
            let id = this.props.location.state.id;   
          this.props.history.push("/UserForm", {
           
          })
       
         
        updateUser({
            id:id,
            name:name,
            password:password,
            age:age,
            address:address,
            job:job,
        }).then(res => {
            this.props.history.push('/');
            alert('Account Successfully Updated');
            this.fetchUsers();
        }).catch(err =>{
            alert('Account failed to update! '+err);
        })
      }

      render() {
        let rows = [];
        
        const contents = this.state.data.forEach((item, key) => {
          if(key % 2 === 0)
          {
            rows.push(<tr className='bg-secondary text-black'>
            <td>{item.name}</td>
            <td>{item.password}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td>{item.job}</td>
            <td><button onClick={this.fillForm(item)}>Edit</button></td>
            <td><button id={item.name} onClick={this.deleteRecord}>Delete</button></td>
            <td><button onClick={this.updateUserInfo}>Update</button></td>
            <td><button id={item} onClick={this.retrieveUser}>Display</button></td>
            </tr>);
          }else{
            rows.push(<tr className='bg-secondary text-green'>
            <td>{item.name}</td>
            <td>{item.password}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
            <td>{item.job}</td>
            <td><button onClick={this.fillForm(item)}>Edit</button></td>
            <td><button id={item} onClick={this.deleteRecord}>Delete</button></td>
            <td><button onClick={this.updateUserInfo}>Update</button></td>
            <td><button id={item} onClick={this.retrieveUser}>Display</button></td>
            </tr>);
          };
     });
        return (
          <div className="container">
            <table className="table table-striped">
              <thead>
              <tr className='Table-header'>
                <th>Name</th>
                <th>Password</th>
                <th>Age</th>
                <th>Address</th>
                <th>Job</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Update</th>
                <th>Display</th>
              </tr>
              </thead>
              {rows}
            </table>
          </div>
        );
      }
    
}
export default Table1;
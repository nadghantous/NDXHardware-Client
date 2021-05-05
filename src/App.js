import { Logger } from 'mongodb';
import React,{Component} from 'react';
import './App.css';
import Login from './components/Login';
import Table1 from './components/Table1';

class App extends Component {
  render(){
  return(
    <div className="App">

      <Login />
        
    </div>
  );
  }
}
export default App;

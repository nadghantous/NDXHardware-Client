import React, { Component } from 'react';
import {retrievePCConfigurations} from '../actions/actions';
import '../App.css';
import {Link} from  'react-router-dom';
import pcsActions  from '../redux/actions/desktops';
import { connect } from 'react-redux';
import NDXSoftwareTable from './NDXSoftwareTable';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class NonGamerPC extends Component{
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback

        this.fetchNonGamerPCConfigurations = this.fetchNonGamerPCConfigurations.bind(this);
        this.state = {
            data: [],
        };
        this.name ="";
      }
      componentDidMount(){
        this.fetchNonGamerPCConfigurations();
    }
    async fetchNonGamerPCConfigurations(){
      const {category} = this.props.location.state;
      let result = {data: category};
      let response = await this.props.dispatch(pcsActions.retrieveNonGamerPCConfigurations(result));
      this.setState({response});
    }
 
      selectPCConfiguration = item => event => {
          event.preventDefault();
          const {price} = this.props.location.state;
          const {name} = this.props.location.state;
          let Config_Name = item.Config_Name;
          let CPU = item.CPU;
          let GPU = item.GPU;
          let RAM = item.RAM;
          let Storage = item.Storage;
          let Motherboard = item.Motherboard;
          let PSU = item.PSU;
          let totalprice = item.totalprice;
          this.props.history.push("/budgetpctotalprice",{
              name: name,
              Config_Name: Config_Name,
              CPU: CPU,
              GPU: GPU,
              RAM: RAM,
              Storage: Storage,
              Motherboard: Motherboard,
              PSU: PSU,
              totalprice: totalprice,
              price: price
          });
      }
      render() {
        let rows = [];
        const {name} = this.props.location.state;
        this.name = name;
        const contents = this.props.nongamerpcs.forEach((item, key) => {
          console.log(item);
          if(key % 2 === 0)
          {
            rows.push(<tr className='Odd-Row'>
            <td>{item.Config_Name}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{item.totalprice}</td>
            <td><button id={item} className="btn" onClick={this.selectPCConfiguration(item)}>Select PC</button></td>
            </tr>);
          }else{
            rows.push(<tr className='Even-Row'>
            <td>{item.Config_Name}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{item.totalprice}</td>
            <td><button className="btn" id={item}  onClick={this.selectPCConfiguration(item)}>Select PC </button></td>
            </tr>);
          };
     });

        return (
          <div className="container">
              <br></br>
              <div className="form-group">
              <h2 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i> Please select a PC of your choice
            </h2>
            <br></br>
            <Link className="link" to={{
                pathname: '/nongamer',
                state: {name: this.name}
            }

            } > Back to Non Gamer Options </Link>
            <br></br>
              </div>
              <br></br>
            <div className="form-group" id="over">
            <img src="pc.png" ></img>
            </div>
            <br></br>
            <NDXSoftwareTable data={this.props.nongamerpcs} collectionName="nongamer_desktops" history={this.props.history} location={this.props.location}></NDXSoftwareTable>
            <br></br>
            <h5 class="text-center mb-3" className="Label"><i class="fas fa-sign-in-alt"></i><b>
            NDXHardware</b> 
            </h5>
            <br></br>
          </div>
        );
      }
}
const mapStateToProps = state =>({  
  nongamerpcs: state.pcReducer.nongamerpcs,
})

export default connect(mapStateToProps)(NonGamerPC);
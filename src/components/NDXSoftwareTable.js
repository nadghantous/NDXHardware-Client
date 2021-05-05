import React, { Component } from 'react';
import {retrievePCConfigurations} from '../actions/actions';
import '../App.css';
import {Link} from  'react-router-dom';
import pcsActions  from '../redux/actions/desktops';
import { connect } from 'react-redux';
class NDXSoftwareTable extends Component{
    constructor(){
        super();
        this.state = {
            TableComp:[],
        }

    }
    componentDidMount(){
        this.loadInfo();
    }
    loadInfo = () => {
        let data_array = this.props.data;
        for(let i = 0; i < data_array.length; i++){
            this.state.TableComp.push(Object.keys(data_array[i]));
        }
        this.setState({TableComp: this.state.TableComp})
    }
    selectCPU = item => event => {
        event.preventDefault();
        let CPU = item.Proc_Name + " " + item.Proc_Freq;
        console.log(CPU);
        const {name} = this.props.location.state;
        console.log(name);
        alert("Processor Selected: "+item.Proc_Name+" "+item.Proc_Freq);
        
        this.props.history.push("/gpu",{
            CPU:CPU,
            Price: item.Price,
            name: name,
        });
    }
    selectGPU = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        let GPU = item.Grap_Name+" "+item.Grap_Memory;
        const {Price} = this.props.location.state;
        let pricesum = parseFloat(item.Price) + parseFloat(Price);
        alert("Graphics Card Selected: "+item.Grap_Name+" "+item.Grap_Memory);
          this.props.history.push("/ram",{
              name:name,
              CPU:CPU,
              GPU:GPU,
              Price: item.Price,
              pricesum: pricesum
          });
      }
      selectRAM = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        let RAM = item.RAM_Name+" "+item.RAM_Storage;
        const {pricesum} = this.props.location.state;
        let pricesum2 = parseFloat(item.Price) + parseFloat(pricesum);
        alert("RAM Selected: "+item.RAM_Name+" "+item.RAM_Storage);
        this.props.history.push("/storage",{
            name:name,
            CPU:CPU,
            GPU:GPU,
            RAM:RAM,
            Price:item.Price,
            pricesum2:pricesum2
        });
    }
    selectStorage = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        let Storage = item.Stor_Name+" "+item.Stor_Capacity;
        const {pricesum2} = this.props.location.state;
        let pricesum3 = parseFloat(item.Price) + parseFloat(pricesum2);
        alert("Storage Selected: "+item.Stor_Name+" "+item.Stor_Capacity);
        this.props.history.push("/motherboard",{
            name:name,
            CPU:CPU,
            GPU:GPU,
            RAM:RAM,
            Storage:Storage,
            Price: item.Price,
            pricesum3: pricesum3
        });
    }
    selectMotherboard = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        const {pricesum3} = this.props.location.state;
        let Motherboard = item.Moth_Name;
        let pricesum4 = parseFloat(item.Price) + parseFloat(pricesum3);
        alert("Motherboard Selected: "+item.Moth_Name);
        this.props.history.push("/psu",{
            name:name,
            CPU:CPU,
            GPU:GPU,
            RAM:RAM,
            Storage:Storage,
            Motherboard:Motherboard,
            Price: item.Price,
            pricesum4: pricesum4
        });
    }
    selectPSU = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        const {CPU} = this.props.location.state;
        const {GPU} = this.props.location.state;
        const {RAM} = this.props.location.state;
        const {Storage} = this.props.location.state;
        const {Motherboard} = this.props.location.state;
        let PSU = item.Pow_Name+" "+item.Pow_Capacity;
        const {pricesum3} = this.props.location.state;
      const {pricesum4} = this.props.location.state;
      let totalprice = parseFloat(item.Price) + parseFloat(pricesum4);
      alert("Power Supply Unit Selected: "+item.Pow_Name+" "+item.Pow_Capacity);
        this.props.history.push("/totalprice",{
          name:name,
          CPU:CPU,
          GPU:GPU,
          RAM:RAM,
          Storage:Storage,
          Motherboard:Motherboard,
          PSU:PSU,
          Price: item.Price,
          totalprice: totalprice
        });
    }
    selectPCConfiguration = item => event => {
        event.preventDefault();
        const {minprice} = this.props.location.state;
        const {maxprice} = this.props.location.state;
        const {name} = this.props.location.state;
        let Config_Name = item.Config_Name;
        let CPU = item.CPU;
        let GPU = item.GPU;
        let RAM = item.RAM;
        let Storage = item.Storage;
        let Motherboard = item.Motherboard;
        let PSU = item.PSU;
        let totalprice = item.totalprice;
        alert("PC Build Selected: "+Config_Name);
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
            minp: minprice,
            maxp: maxprice
        });
        
    }
    selectGamerPCConfiguration = item => event => {
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
        let resolution = item.Pref_Resolution;
        let framerate = item.Pref_Framerate;
        alert("PC Build Selected: "+Config_Name);
        this.props.history.push("/gamerpccheckout",{
            name: name,
            Config_Name: Config_Name,
            CPU: CPU,
            GPU: GPU,
            RAM: RAM,
            Storage: Storage,
            Motherboard: Motherboard,
            PSU: PSU,
            totalprice: totalprice,
            price: price,
            resolution: resolution,
            framerate: framerate
        });
    }
    selectNonGamerPCConfiguration = item => event => {
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
        let category = item.Category;
        alert("PC Build Selected: "+Config_Name);
        this.props.history.push("/nongamerpccheckout",{
            name: name,
            Config_Name: Config_Name,
            CPU: CPU,
            GPU: GPU,
            RAM: RAM,
            Storage: Storage,
            Motherboard: Motherboard,
            PSU: PSU,
            totalprice: totalprice,
            price: price,
            category: category
        });
    }
    selectCurrencyRate = item => event => {
        event.preventDefault();
        const {name} = this.props.location.state;
        let rate = item;
        this.props.history.push("/currencyconverter",{
            name:name,
            rate:rate
        })
      }
    render(){
        let headers = [];
        let counter = 0;
        let types = this.props.types;
        console.log(this.state.TableComp[0]);
       
        let rows = [];
        if(this.props.collectionName==="processors"){
            headers.push(<tr className="Table-header"><th>CPU NB</th>
            <th>CPU NAME</th>
            <th>CPU FREQUENCY</th>
            <th>PRICE $</th>
            <th>CPU SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="graphics_cards"){
            headers.push(<tr className="Table-header"><th>GPU NB</th>
            <th>GPU NAME</th>
            <th>GPU MEMORY</th>
            <th>PRICE $</th>
            <th>GPU SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="memory"){
            headers.push(<tr className="Table-header"><th>RAM NB</th>
            <th>RAM NAME</th>
            <th>RAM STORAGE</th>
            <th>PRICE $</th>
            <th>RAM SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="storage"){
            headers.push(<tr className="Table-header"><th>STORAGE NB</th>
            <th>STORAGE NAME</th>
            <th>STORAGE CAPACITY</th>
            <th>PRICE $</th>
            <th>STORAGE SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="motherboard"){
            headers.push(<tr className="Table-header"><th>MOTHERBOARD NB</th>
            <th>MOTHERBOARD NAME</th>
            <th>PRICE $</th>
            <th>MOTHERBOARD SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="power_supply"){
            headers.push(<tr className="Table-header"><th>PSU NB</th>
            <th>PSU NAME</th>
            <th>PSU CAPACITY</th>
            <th>PRICE $</th>
            <th>PSU SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="currency_rates"){
            headers.push(<tr className="Table-header"><th>CURRENCY TYPE</th>
            <th>CURRENCY RATE VALUE</th>
            <th>CURRENCY RATE SELECTION</th>
            </tr>)
        }
        else if(this.props.collectionName==="desktop"){
            headers.push(<tr className='Table-header'>
                <th>Configuration Name</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Motherboard</th>
                <th>PSU</th>
                <th>Total Price $</th>
                <th>PC Selection</th>
              </tr>);
        }else if(this.props.collectionName==="gamer_desktops"){
            headers.push(<tr className='Table-header'>
                <th>Configuration Name</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Motherboard</th>
                <th>PSU</th>
                <th>Resolution</th>
                <th>Framerate</th>
                <th>Total Price $</th>
                <th>PC Selection</th>
              </tr>);
        }
        else if(this.props.collectionName==="nongamer_desktops"){
            headers.push(<tr className='Table-header'>
                <th>Configuration Name</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Motherboard</th>
                <th>PSU</th>
                <th>Category</th>
                <th>Total Price $</th>
                <th>PC Selection</th>
              </tr>);
        }
        const contents = this.props.data.forEach((item, key) => {
            if(this.props.collectionName === "processors"){
                
                rows.push(<tr className='Even-Row'>
               <td>{item.Proc_ID}</td>
               <td>{item.Proc_Name}</td>
               <td>{item.Proc_Freq}</td>
               <td>{item.Price}</td>
               <td><button className="btn" onClick={this.selectCPU(item)} id={item}  >Select CPU</button></td>
               </tr>);
               
            }
            else if(this.props.collectionName === "graphics_cards"){
                rows.push(<tr className='Even-Row'>
                <td>{item.Grap_ID}</td>
               <td>{item.Grap_Name}</td>
               <td>{item.Grap_Memory}</td>
               <td>{item.Price}</td>
               <td><button id={item} onClick={this.selectGPU(item)} className="btn" >Select GPU</button></td>
               </tr>);
            }
           else if(this.props.collectionName === "memory"){
            rows.push(<tr className='Even-Row'>
            <td>{item.RAM_ID}</td>
            <td>{item.RAM_Name}</td>
            <td>{item.RAM_Storage}</td>
            <td>{item.Price}</td>
            <td><button id={item} className="btn" onClick={this.selectRAM(item)}>Select RAM</button></td>
            </tr>);
           }
           else if(this.props.collectionName === "storage"){
            rows.push(<tr className='Even-Row'>
            <td>{item.Stor_ID}</td>
             <td>{item.Stor_Name}</td>
             <td>{item.Stor_Capacity}</td>
             <td>{item.Price}</td>
             <td><button id={item} className="btn" onClick={this.selectStorage(item)}>Select Storage</button></td>
             </tr>);
           }
           else if(this.props.collectionName === "motherboard"){
            rows.push(<tr className='Even-Row'>
            <td>{item.Moth_ID}</td>
              <td>{item.Moth_Name}</td>
              <td>{item.Price}</td>
              <td><button id={item} className="btn" onClick={this.selectMotherboard(item)}>Select MB</button></td>
              </tr>);
           }
           else if(this.props.collectionName === "power_supply"){
            rows.push(<tr className='Even-Row'>
            <td>{item.Pow_ID}</td>
            <td>{item.Pow_Name}</td>
            <td>{item.Pow_Capacity}</td>
            <td>{item.Price}</td>
            <td><button id={item} className="btn" onClick={this.selectPSU(item)}>Select PSU</button></td>
            </tr>);
           }
           else if(this.props.collectionName === "desktop"){
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
           }
           else if(this.props.collectionName === "currency_rates"){   
                rows.push(<tr className='Even-Row'>
                <td>{types[counter]}</td>
                <td>{item}</td>
                <td><button id={item} className="btn" onClick={this.selectCurrencyRate(item)}>Select Rate</button></td>
                </tr>);
                counter++;
           }
           else if(this.props.collectionName === "gamer_desktops"){
            rows.push(<tr className='Even-Row'>
            <td>{item.Config_Name}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{item.Pref_Resolution}</td>
            <td>{item.Pref_Framerate}</td>
            <td>{item.totalprice}</td>
            <td><button className="btn" id={item}  onClick={this.selectGamerPCConfiguration(item)}>Select PC </button></td>
            </tr>); 
           }
           else if(this.props.collectionName === "nongamer_desktops"){
            rows.push(<tr className='Even-Row'>
            <td>{item.Config_Name}</td>
            <td>{item.CPU}</td>
            <td>{item.GPU}</td>
            <td>{item.RAM}</td>
            <td>{item.Storage}</td>
            <td>{item.Motherboard}</td>
            <td>{item.PSU}</td>
            <td>{item.Category}</td>
            <td>{item.totalprice}</td>
            <td><button className="btn" id={item}  onClick={this.selectNonGamerPCConfiguration(item)}>Select PC </button></td>
            </tr>); 
           }
     });
     if (this.props.collectionName === "gamer_desktops"){
        return (
            <div className="container">
                <br></br>
              <table className="table table-responsive table-striped table-dark ">
                <thead>
      
                  {headers}
                
                </thead>
                {rows}
              </table>
              <br></br>
              <br></br>
            </div>
          );
     }
     else{
        return (
            <div className="container">
                <br></br>
              <table className="table table-striped table-dark ">
                <thead>
      
                  {headers}
                
                </thead>
                {rows}
              </table>
              <br></br>
              <br></br>
            </div>
          );
     }
        
    }
}
export default NDXSoftwareTable;
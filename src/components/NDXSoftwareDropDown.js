import React, { Component } from 'react';
import {retrievePCConfigurations} from '../actions/actions';
import '../App.css';
import {Link} from  'react-router-dom';
import pcsActions  from '../redux/actions/desktops';
import cpusActions from '../redux/actions/processors';
import gpusActions from '../redux/actions/graphicscards';
import ramsActions from '../redux/actions/rams';
import storagesActions from '../redux/actions/storages';
import motherboardsActions from '../redux/actions/motherboards';
import psusActions from '../redux/actions/powersupplies';
import { connect } from 'react-redux';
import continentsActions from '../redux/actions/continents';
class NDXSoftwareDropDown extends Component{
    constructor(){
        super();
        this.state = {
            DropDownComp:[],
            CPU: '',
            cpuprice: 0,
            GPU: '',
            gpuprice: 0,
            RAM:'',
            ramprice: 0,
            Storage:'',
            storageprice: 0,
            Motherboard: '',
            mothprice: 0,
            PSU: '',
            psuprice: 0,
        }
        



    }
    componentDidMount(){
        
        this.loadInfo();
    }
    async loadInfo () {
        if(this.props.collectionName === "continents"){
            let response = await this.props.dispatch(continentsActions.retrieveContinents());
        this.setState({response});
            let data_array = this.props.continents;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}}  key={i} value={item.id}>{item.name}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "processor"){
            let response = await this.props.dispatch(cpusActions.retrieveCPUS());
            this.setState({response});
            let data_array = this.props.processors;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                if(i === 0){
                    localStorage.setItem('CPU',item.Proc_Name + " "+ item.Proc_Freq);
                    localStorage.setItem('cpuprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}}  key={i} value={item.Proc_Name + " "+ item.Proc_Freq} pricevalue={item.Price}>{item.Proc_Name}  {item.Proc_Freq}  ${item.Price}</option>);
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "graphics_card"){
            let response = await this.props.dispatch(gpusActions.retrieveGPUS());
            this.setState({response});
            let data_array = this.props.graphicscards;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                if(i === 0){
                    localStorage.setItem('GPU',item.Grap_Name + " " + item.Grap_Memory);
                    localStorage.setItem('gpuprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}} key={i} pricevalue={item.Price} value={item.Grap_Name + " "+  item.Grap_Memory}>{item.Grap_Name}  {item.Grap_Memory}  ${item.Price}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "memory"){
            let response = await this.props.dispatch(ramsActions.retrieveRAMS());
            this.setState({response});
            let data_array = this.props.rams;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                if(i === 0){
                    localStorage.setItem('RAM',item.RAM_Name + " "+ item.RAM_Storage);
                    localStorage.setItem('ramprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}} key={i} pricevalue={item.Price} value={item.RAM_Name + " "+ item.RAM_Storage}>{item.RAM_Name}  {item.RAM_Storage}  ${item.Price}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "storage"){
            let response = await this.props.dispatch(storagesActions.retrieveStorages());
            this.setState({response});
            let data_array = this.props.storages;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                if(i === 0){
                    localStorage.setItem('Storage',item.Stor_Name + " "+ item.Stor_Capacity);
                    localStorage.setItem('storageprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}} key={i} value={item.Stor_Name + " "+ item.Stor_Capacity} pricevalue={item.Price} >{item.Stor_Name}  {item.Stor_Capacity}  ${item.Price}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "motherboard"){
            let response = await this.props.dispatch(motherboardsActions.retrieveMotherboards());
            this.setState({response});
            let data_array = this.props.motherboards;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i];
                if(i === 0){
                    localStorage.setItem('Motherboard',item.Moth_Name);
                    localStorage.setItem('motherboardprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}} key={i} value={item.Moth_Name} pricevalue={item.Price} >{item.Moth_Name}  ${item.Price}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }
        else if(this.props.collectionName === "power_supply"){
            let response = await this.props.dispatch(psusActions.retrievePSUS());
            this.setState({response});
            let data_array = this.props.psus;
            let DropDownComp = [];
            console.log(data_array)
            for(let i = 0; i < data_array.length; i++){
                let item = data_array[i]; 
                if(i === 0){
                    localStorage.setItem('PSU',item.Pow_Name + " " + item.Pow_Capacity);
                    localStorage.setItem('psuprice',item.Price);
                }
                DropDownComp.push(<option style={{backgroundColor:'black',color:'#0eff00'}} key={i} pricevalue={item.Price} value={item.Pow_Name + " "+ item.Pow_Capacity}>{item.Pow_Name}  {item.Pow_Capacity}  ${item.Price}</option>);
    
            }
            this.setState({DropDownComp:DropDownComp});
        }

        
    }
    handleChange = (event) => {
        if(this.props.collectionName === "processor"){
            const currentIndex = event.target.options.selectedIndex;
          
            let CPU = this.state.DropDownComp[currentIndex].props.value;
            let cpuprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(CPU);
            console.log(cpuprice);
            localStorage.setItem('CPU',CPU);
            localStorage.setItem('cpuprice',cpuprice);
        }
       if(this.props.collectionName === "graphics_card"){
            const currentIndex = event.target.options.selectedIndex;
            let GPU = this.state.DropDownComp[currentIndex].props.value;
            let gpuprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(GPU);
            console.log(gpuprice);
            localStorage.setItem('GPU',GPU);
            localStorage.setItem('gpuprice',gpuprice);
        }
        if(this.props.collectionName === "memory"){
            const currentIndex = event.target.options.selectedIndex;
            let RAM = this.state.DropDownComp[currentIndex].props.value;
            let ramprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(RAM);
            console.log(ramprice);
            localStorage.setItem('RAM',RAM);
            localStorage.setItem('ramprice',ramprice);
        }
        if(this.props.collectionName === "storage"){
            const currentIndex = event.target.options.selectedIndex;
            let Storage = this.state.DropDownComp[currentIndex].props.value;
            let storageprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(Storage);
            console.log(storageprice);
            localStorage.setItem('Storage',Storage);
            localStorage.setItem('storageprice',storageprice);
        }
        if(this.props.collectionName === "motherboard"){
            const currentIndex = event.target.options.selectedIndex;
            let Motherboard = this.state.DropDownComp[currentIndex].props.value;
            let mothprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(Motherboard);
            console.log(mothprice);
            localStorage.setItem('Motherboard',Motherboard);
            localStorage.setItem('motherboardprice',mothprice);
        }
        if(this.props.collectionName === "power_supply"){
            const currentIndex = event.target.options.selectedIndex;
            let PSU = this.state.DropDownComp[currentIndex].props.value;
            let psuprice = this.state.DropDownComp[currentIndex].props.pricevalue;
            console.log(PSU);
            console.log(psuprice);
            localStorage.setItem('PSU',PSU);
            localStorage.setItem('psuprice',psuprice);
        }
      };

    render(){

        return(
        <div className="form-group">
        <select onChange={this.handleChange.bind(null)} style={{backgroundColor:'#0eff00',color:'black'}}>{this.state.DropDownComp}</select>
        </div>
        );
    }
}
const mapStateToProps = state =>({
    continents: state.continentReducer.continents,
    processors: state.cpuReducer.processors,
    graphicscards: state.gpuReducer.graphicscards,
    rams: state.ramReducer.rams,
    storages: state.storageReducer.storages,
    motherboards: state.motherboardReducer.motherboards,
    psus: state.psuReducer.psus,
  })
  
  export default connect(mapStateToProps)(NDXSoftwareDropDown);

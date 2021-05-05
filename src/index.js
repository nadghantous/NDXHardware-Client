import React from "react";
import ReactBootstrap from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { configurePersistor, configureStore } from './redux/store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table1 from "./components/Table1";
import Login from "./components/Login";
import Registration from "./components/Registration";
import MainMenu from "./components/MainMenu";
import CustomPCCPU from "./components/CustomPCCPU";
import BudgetPC from "./components/BudgetPC";
import GPU from "./components/GPU";
import RAM from "./components/RAM";
import Storages from "./components/Storages";
import Motherboard from "./components/Motherboard";
import PSU from "./components/PSU";
import TotalPrice from "./components/TotalPrice";
import PCConfigurations from "./components/PCConfigurations";
import BudgetPCTotalPrice from "./components/BudgetPCTotalPrice";
import CustomerOrders from "./components/CustomerOrders";
import './fonts/Orbitron-VariableFont_wght.ttf';
import PriceGraph from "./components/PriceGraph";
import CurrencyRates from "./components/CurrencyRates";
import CurrencyConverter from "./components/CurrencyConverter";
import StartUp from "./components/StartUp";
import LoginAdmin from "./components/LoginAdmin";
import RegistrationAdmin from "./components/RegistrationAdmin";
import MainMenuAdmin from "./components/MainMenuAdmin";
import AddCPU from "./components/AddCPU";
import AddGPU from "./components/AddGPU";
import AddRAM from "./components/AddRAM";
import AddStorage from "./components/AddStorage";
import AddMotherboard from "./components/AddMotherboard";
import AddPSU from "./components/AddPSU";
import AddPC from "./components/AddPC";
import PerformancePC from "./components/PerformancePC";
import Gamer from "./components/Gamer";
import NonGamer from "./components/NonGamer";
import GamerPC from "./components/GamerPC";
import GamerPCCheckout from "./components/GamerPCCheckout";
import NonGamerPC from "./components/NonGamerPC";
import NonGamerPCCheckout from "./components/NonGamerPCCheckout";
const store = configureStore();
const persistor = configurePersistor(store);
class RouterNavigationSample extends React.Component {
  render() {
    return (
     <Provider store={store}>
        <Router>
          <div className="container">
            <>
              <Route exact path="/" render={(props) => <StartUp {...props} />} />
              <Route
                path="/login"
                render={(props) => <Login {...props} />}
              />
               <Route
                path="/loginadmin"
                render={(props) => <LoginAdmin {...props} />}
              />
               <Route
                path="/adminregistration"
                render={(props) => <RegistrationAdmin {...props} />}
              />
              <Route
                path="/Table1"
                render={(props) => <Table1 {...props} />}
              />
              <Route
                path="/registration"
                render={(props) => <Registration {...props} />}
              />
              <Route
                path="/home"
                render={(props) => <MainMenu {...props} />}
              />
              <Route
              path="/adminhome" 
              render={(props) => <MainMenuAdmin {...props}/>}
              />

              <Route
                path="/custompccpu"
                render={(props) => <CustomPCCPU {...props} />}
              />
              <Route
                path="/budgetpc"
                render={(props) => <BudgetPC {...props} />}
              />
              <Route
                path="/performancepc"
                render={(props) => <PerformancePC {...props} />}
              />
              <Route
                path="/gamer"
                render={(props) => <Gamer {...props} />}
              />
              <Route
                path="/gamerpcs"
                render={(props) => <GamerPC {...props} />}
              />
              <Route
                path="/gamerpccheckout"
                render={(props) => <GamerPCCheckout {...props} />}
              />
              <Route
                path="/nongamerpccheckout"
                render={(props) => <NonGamerPCCheckout {...props} />}
              />
              <Route
                path="/nongamer"
                render={(props) => <NonGamer {...props} />}
              />
              <Route
                path="/nongamerpcs"
                render={(props) => <NonGamerPC {...props} />}
              />
               <Route
                path="/gpu"
                render={(props) => <GPU {...props} />}
              />
               <Route
                path="/ram"
                render={(props) => <RAM {...props} />}
              />
               <Route
                path="/storage"
                render={(props) => <Storages {...props} />}
              />
               <Route
                path="/motherboard"
                render={(props) => <Motherboard {...props} />}
              />
               <Route
                path="/psu"
                render={(props) => <PSU {...props} />}
              />
               <Route
                path="/totalprice"
                render={(props) => <TotalPrice {...props} />}
              />
               <Route
                path="/pcconfigurations"
                render={(props) => <PCConfigurations {...props} />}
              />
               <Route
                path="/budgetpctotalprice"
                render={(props) => <BudgetPCTotalPrice {...props} />}
              />
               <Route
                path="/customerorders"
                render={(props) => <CustomerOrders {...props} />}
              />
               <Route
                path="/pricegraph"
                render={(props) => <PriceGraph {...props} />}
              />
              
               <Route
                path="/currencyrates"
                render={(props) => <CurrencyRates {...props} />}
              />
               <Route
                path="/currencyconverter"
                render={(props) => <CurrencyConverter {...props} />}
              />
              <Route 
                path="/addcpu"
                render={(props) => <AddCPU {...props} />}
              />
              <Route 
                path="/addgpu"
                render={(props) => <AddGPU {...props} />}
              />
              <Route 
                path="/addram"
                render={(props) => <AddRAM {...props} />}
              />
              <Route 
                path="/addstorage"
                render={(props) => <AddStorage {...props} />}
              />
               <Route 
                path="/addmotherboard"
                render={(props) => <AddMotherboard {...props} />}
              />
               <Route 
                path="/addpsu"
                render={(props) => <AddPSU {...props} />}
              />
              <Route 
                path="/addpcconfigurations"
                render={(props) => <AddPC {...props} />}
              />
            </>
          </div>
        </Router>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);
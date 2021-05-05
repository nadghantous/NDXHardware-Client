import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 3002 : 3002;
const fixerURL = "http://data.fixer.io/api/latest?access_key=769c4377c7d4082aca3f3f3c238c972a";
const currencyLayerURL = "http://api.currencylayer.com/live?access_key=df6e6ef90f9464c0b98b1b6b0d5f3c98";

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;

async function retrieveCPUS(){
  const url = `${baseURLApi}/users/retrieveCPUS`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveGPUS(){
  const url = `${baseURLApi}/users/retrieveGPUS`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveRAMS(){
  const url = `${baseURLApi}/users/retrieveRAMS`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveStorages(){
  const url = `${baseURLApi}/users/retrieveStorages`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveMotherboards(){
  const url = `${baseURLApi}/users/retrieveMotherboards`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrievePSUS(){
  const url = `${baseURLApi}/users/retrievePSUS`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveDesktops(){
  const url = `${baseURLApi}/users/retrieveDesktops`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveUsers() {
  const url = `${baseURLApi}/users/retrieveUsers`;
  return await axios.get(url).then(response => response.data.data);
}

async function createUser(data)
{
  const url = `${baseURLApi}/users/createUser`;
  return await axios.post(url, data).then(response => response.data);
}
async function createCustomerOrder(data){
  const url = `${baseURLApi}/users/createCustomerOrder`;
  return await axios.post(url, data).then(response => response.data);
}
async function updateUser(data){
    const url = `${baseURLApi}/users/updateUser`;
    return await axios.post(url, data).then(response => response.data);
}
async function deleteOrder(id){
  const url = `${baseURLApi}/users/deleteOrder`;
  return await axios.post(url,id).then(response => response.data);
}
async function deleteUser(data){
    const url = `${baseURLApi}/users/deleteUser`;
    return await axios.post(url,data).then(response => response.data);
}
async function findUser(data){
  const url = `${baseURLApi}/users/findUser`;
  return await axios.post(url, data).then(response => response.data);
}
async function retrievePCConfigurations(data){
  const url = `${baseURLApi}/users/retrievePCConfigurations`;
  return await axios.post(url,data).then(response => response.data.data);
}

async function retrieveCustomerOrders(data){
  const url = `${baseURLApi}/users/retrieveCustomerOrders`;
  return await axios.post(url,data).then(response => response.data.data);
}
async function retrieveUserPriceOrders(data){
  const url = `${baseURLApi}/users/retrieveUserPriceOrders`;
  return await axios.post(url,data).then(response => response.data);
}
async function retrieveCurrencyRates(){
  const url = `${currencyLayerURL}`;
  return await axios.get(url);
}
async function retrieveContinents(){
  const url = `${baseURLApi}/users/retrieveContinents`;
  return await axios.get(url).then(response => response.data.data);
}
async function retrieveGamerPCConfigurations(data){
  const url = `${baseURLApi}/users/retrieveGamerPCConfigurations`;
  return await axios.post(url,data).then(response => response.data.data);
}
async function retrieveNonGamerPCConfigurations(data){
  const url = `${baseURLApi}/users/retrieveNonGamerPCConfigurations`;
  return await axios.post(url,data).then(response => response.data.data);
}
async function retrieveAdmins(){
  const url = `${baseURLApi}/users/retrieveAdmins`;
  return await axios.get(url).then(response => response.data.data);
}
async function createAdmin(data){
  const url = `${baseURLApi}/users/createAdmin`;
  return await axios.post(url,data).then(response => response.data);
}
async function addCPU(data){
  const url = `${baseURLApi}/users/addCPU`;
  return await axios.post(url,data).then(response => response.data);
}
async function addGPU(data){
  const url = `${baseURLApi}/users/addGPU`;
  return await axios.post(url,data).then(response => response.data);
}
async function addRAM(data){
  const url = `${baseURLApi}/users/addRAM`;
  return await axios.post(url,data).then(response => response.data);
}
async function addStorage(data){
  const url = `${baseURLApi}/users/addStorage`;
  return await axios.post(url,data).then(response => response.data);
}
async function addMotherboard(data){
  const url = `${baseURLApi}/users/addMotherboard`;
  return await axios.post(url,data).then(response => response.data);
}
async function addPSU(data){
  const url = `${baseURLApi}/users/addPSU`;
  return await axios.post(url,data).then(response => response.data);
}
async function addPCConfiguration(data){
  const url = `${baseURLApi}/users/addPCConfiguration`;
  return await axios.post(url,data).then(response => response.data);
}
export {
  retrieveUsers,
  createUser,
  updateUser,
  deleteUser,
  findUser,
  retrieveCPUS,
  retrieveGPUS,
  retrieveRAMS,
  retrieveStorages,
  retrieveMotherboards,
  retrievePSUS,
  createCustomerOrder,
  retrievePCConfigurations,
  retrieveCustomerOrders,
  deleteOrder,
  retrieveUserPriceOrders,
  retrieveCurrencyRates,
  retrieveContinents,
  retrieveGamerPCConfigurations,
  retrieveNonGamerPCConfigurations,
  retrieveAdmins,
  createAdmin,
  addCPU,
  addGPU,
  addRAM,
  addStorage,
  addMotherboard,
  addPSU,
  addPCConfiguration,
  retrieveDesktops
};
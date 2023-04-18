import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyReg from './components/CompanyReg';
import Login from './components/Login';
import CustomerReg from './components/CustomerReg';
import Register from './components/Register';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import DashboardCompany from './components/DashboardCompany/DashboardCompany';
import DashboardCustomer from './components/DashboardCustomer/DashboardCustomer';

function App() { 

 
  return (
   <div className="App" >
   
   <Router>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/company"  element={<CompanyReg/>} />
          <Route path="/customer"  element={<CustomerReg/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/adminpanel/*"  element={<DashboardAdmin/>} />
          <Route path="/companypanel/*"  element={<DashboardCompany/>} />
          <Route path="/customerpanel/*"  element={<DashboardCustomer/>} />             
        </Routes>
  </Router>     
   </div>
  );
}

export default App;

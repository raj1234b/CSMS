import React from "react";
import {useState, useReducer,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css";

const init = {      
  complaint:null
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function Complaint() {
    const [cus, dispatch] = useReducer(reducer, init);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [valueCompany, setValueCompany] = useState(0);
    const [company,setCompany] = useState([]); 
    const navigate = useNavigate();
const getCompany = () =>{
  fetch("http://localhost:8080/approvedcompany")
  .then(resp=>resp.json())
  .then(data=>setCompany(data))
}

const handleCompanyChange =  (e) => {
  setValueCompany(e.target.value);
  
};

useEffect(() => {
  getCompany();
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(cus);
    }
  }, [formErrors,valueCompany]);

  const validate = (values) => {
    const errors = {};
    if (!values.complaint) {
      errors.complaint = "Field is required!";
    }         
    return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(cus));
  setIsSubmit(true);
  sendData(e);
};

let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
const sendData = (e) => {    
    //e.preventDefault();
    //console.log(e);
  let customerId= (JSON.parse(localStorage.getItem("customer")).customerId)
  console.log(customerId);
      const reqData = {
          method: "POST",
          headers: {
              "content-type":"application/json"
          },
          body: JSON.stringify({
              
              complaintDescription: cus.complaint,
              customerId: customerId  ,
              complaintStatus: "",
              companyId: valueCompany                 
          })    
      }
      
      
  fetch("http://localhost:8080/complaintregister",reqData)
  .then(function(response) {
      if(response.status === 200) {
          alert("Complaint send succesfully");
          navigate("/customerpanel/complaint")
        }
        else
        alert("unable to register complaint");             
    }) 
    
}

return (
      <div className="register">
        <h1>Complaint Form</h1>
        <form className="formreg">
        <h6>Customer Name:</h6>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example4" className="form-control"  name="complaint" readOnly={true} value={customerName}
                /> 
            </div> 
            <div className="form-outline mb-4">
              <lable>Select Company:</lable>
              <select id="companyname" name="companyname" className="form-control" value={valueCompany} onChange={handleCompanyChange}>
                <option value="">Company Names :</option>
                    {company.map((company) => (
                <option key={company.companyId}value={company.companyId}>{company.companyName}</option>
                ))}
              </select>
              <p>{`You selected ${valueCompany}`}</p>      
            </div>
    
            <h6>Complaint:</h6>         
            <div className="form-outline mb-4">
              <input type="textarea" id="form3Example4" className="form-control" placeholder="Write Your Complaint Here" name="complaint"  value={cus.complaint}
                  onChange={ (e)=>{dispatch({type: 'update', field: 'complaint', val: e.target.value })} }
                />
              <p className="text-danger">{formErrors.complaint}</p>                 
            </div>
          
            <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
              onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
      </form>        
  </div>
)
    
}

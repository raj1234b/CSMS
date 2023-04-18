import React from "react";
import {useState, useReducer,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css";

const init = {      
  feedback:null
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function Feedback() {
    const [cus, dispatch] = useReducer(reducer, init);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [company,setCompany] = useState([]); 
    const [valueCompany, setValueCompany] = useState(0);
    let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
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
        if (!values.feedback) {
          errors.feedback = "Field is required!";
        }         
        return errors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(cus));
        setIsSubmit(true);
        sendData(e);
      };

    const sendData = (e) => {    
        //e.preventDefault();
        let customer= (JSON.parse(localStorage.getItem("customer")).customerId)
        
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                   
                    feedbackDiscription: cus.feedback,
                    customerId: customer,
                    companyId: valueCompany                
                })    
            }
            
        fetch("http://localhost:8080/feedbackregister",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Feedback send succesfully");
               navigate("/customerpanel/feedback")
             }
             else
                alert("unable to add Feedback");
            }) 
       
    }

    return (
        
        <div className="register">
            <h1>Feedback Form </h1>
            <form className="formreg">
            <h6>Customer Name:</h6>
            <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control"  name="feedback" readOnly={true} value={customerName}
                onChange={ (e)=>{dispatch({type: 'update', field: 'feedback', val: e.target.value })} }
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

        
        <h6>Feedback:</h6>           
        <div className="form-outline mb-4">
            <input type="textarea" id="form3Example4" className="form-control" placeholder=" Write your feedback here" name="feedback" value={cus.feedback}
                onChange={ (e)=>{dispatch({type: 'update', field: 'feedback', val: e.target.value })} }
                />
        <p className="text-danger">{formErrors.feedback}</p>                
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
        </form>        
    </div>
  )
    
}

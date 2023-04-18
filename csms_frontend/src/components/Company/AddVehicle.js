import React from "react";
import {useState, useReducer,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css";

const init = {      
  vehicleno:null
}
const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

export default function AddVehicle() {
    const [com, dispatch] = useReducer(reducer, init);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(com);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        if (!values.vehicleno) {
          errors.vehicleno = "Field is required!";
        }        
        return errors;
      };  

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(com));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          //console.log(com);
          sendData(e);
        }
      }; 

    const sendData = (e) => {    
        //e.preventDefault();
        let company= (JSON.parse(localStorage.getItem("company")).companyId)
        
            const reqData = {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({                   
                    vehiclesDetailsNo: com.vehicleno,
                    companyId: company                    
                })    
            }
            
        fetch("http://localhost:8080/vehicleregister",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Vehicle added succesfully");
               navigate("/companypanel/vehicles")
             }
             else
                alert("unable to add vehicle")
            }) 
       
    }

    return (
        <div className="register">
        <h1>Add Vehicle</h1>
        <form className="formreg">            
        <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control" placeholder="Vehicle No." name="vehicleno" value={com.vehicleno}
                onChange={ (e)=>{dispatch({type: 'update', field: 'vehicleno', val: e.target.value })} }
                /> 
        <p className="text-danger">{formErrors.vehicleno}</p>               
        </div>
        
        <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
            onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
        </form>        
    </div>
  )
}

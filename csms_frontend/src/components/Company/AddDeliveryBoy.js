import React from "react";
import {useState, useReducer,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css";

const init = {      
   name:null,
   contactno:null,
   email:null,
   age:null,
   licence:null,    
    agree:false
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return { ...state, [action.field]: action.val}; 
        case 'clear':
            return init   
    }
}

let AddDeliveryBoy =() =>
{
    
    const [com, dispatch] = useReducer(reducer, init);
    const[agree,setAgree]=useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
   // console.log(com)
        
    }, [formErrors]);
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Name is required!";
        }        
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
        if (!values.age) {
            errors.age = "Age is required";
        }
        if (!values.contactno) {
            errors.contactno = "Contact No is required";
        }
        if (!values.licence) {
            errors.licence = "Licence No. is required";
        }
        if (!values.agree) {
            errors.agree = "Accept terms and condition";
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
                   
                    deliveryBoyName: com.name,
                    deliveryBoyEmail: com.email,
                    deliveryBoyContactNo: com.contactno,
                    deliveryBoyAge: com.age,
                    deliveryBoyLicense: com.licence,
                    companyId: company                    
                })    
            }
            
        fetch("http://localhost:8080/deliveryboyregister",reqData)
        .then(function(response) {
            if(response.status === 200) {
               alert("Delivery Boy added succesfully");
               navigate("/companypanel/deliveryboys")
             }
             else
                alert("unable to add deliveryboy")
            }) 

    }
    return(
        <div className="register">
            <h1>Add Delivery Boy</h1>
            <form className="formreg">            
            <div className="form-outline mb-4">
                <input type="text" id="form3Example4" className="form-control" placeholder="Name" name="Name" value={com.name}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'name', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.name}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="form3Example6" className="form-control" placeholder="Email Id"name="Email" value={com.email}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'email', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.email}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example5" className="form-control" placeholder="Contact No" name="Contact" value={com.contactno}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'contactno', val: e.target.value })} }
                    />                     
            <p className="text-danger">{formErrors.contactno}</p>                
            </div>

            <div className="form-outline mb-4">
                <input type="number" id="form3Example7" className="form-control" placeholder="Age"name="Age" value={com.age}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'age', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.age}</p>                
            </div>
            <div className="form-outline mb-4">
                <input type="number" id="form3Example8" className="form-control" placeholder="Licence No." name="Licence" value={com.licence}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'licence', val: e.target.value })} }
                    />
            <p className="text-danger">{formErrors.licence}</p>                
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form2Example33" name="agree" value={com.agree}
                    onChange={ (e)=>{dispatch({type: 'update', field: 'agree', val: e.target.checked })}} />
                <label className="form-check-label" for="form2Example33">Agree Terms and Conditions</label>
                <p className="text-danger">{formErrors.agree}</p>
            </div>
            <button type="submit" id="btn1"className="btn btn-primary btn-block mb-4" value="Submit" 
                onClick = { (e)=>{ handleSubmit(e) } }>Submit</button>
            </form>
            
        </div>
    )
   
}
export default AddDeliveryBoy;
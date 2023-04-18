import React from 'react'
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";

export default function ListYourFeedback() {
    const [feedbackcus,setFeedback] = useState([]); 

    const getFeedback = () =>{
        let cus= (JSON.parse(localStorage.getItem("customer")).customerId)
        fetch("http://localhost:8080/"+cus+"/getfeedbackcustomer")
        .then(resp=>resp.json())
        .then(data=>setFeedback(data))
    }

    useEffect(() => {
        getFeedback();
       },[])

       return (        
        <div className="row ">
            <h3>Your Feedbacks</h3>
            <div className="">
            <Link to="/customerpanel/feedback/form">
                <button type="button" class="btn btn-primary mb-3">Add New feedback</button>
            </Link>
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                    <td scope="col"><b>Feedback Id</b></td>
                    <td scope="col"><b>Feedback Description</b></td>
                    <td scope="col"><b>Company Name</b></td>
                    
            </thead>
            <tbody>
            {                    
                feedbackcus.map((v)=>
                {
                    return(                        
                        <tr scope="row" key={v.feedbackId}>
                            <td >{v.feedbackId}</td>
                            <td >{v.feedbackDesc}</td>
                            <td >{v.companyName}</td>                          
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
  )
}
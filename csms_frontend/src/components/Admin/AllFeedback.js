import React from 'react'
import {useEffect,useState} from 'react';

export default function AllFeedback() {
    const [feedback,setFeedback] = useState([]); 
    const [valueCompany, setValueCompany] = useState(0);
    const [company,setCompany] = useState([]); 

    const getFeedback = (com) =>{
     //  let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getfeedbackresponse")
        .then(resp=>resp.json())
        .then(data=>setFeedback(data))
    }

    const getCompany = () =>{
        fetch("http://localhost:8080/approvedcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
     }
  

    useEffect(() => {
        getCompany();
        getFeedback(valueCompany);
       },[valueCompany])

       const handleCompanyChange =  (e) => {
        setValueCompany(e.target.value);
      };

       return (      
        <div className="form-outline mb-4">
            <div style={{width:"50%",alignItems:"center"}}>
        <lable><b>Select Company:</b></lable>
        <select id="companyname" name="companyname" className="form-control" value={valueCompany} onChange={handleCompanyChange}>
           <option value="">Company Names :</option>
           {company.map((company) => (
           <option value={company.companyId}>{company.companyName}</option>
           ))}
        </select>
        </div>
       {/* <p>{`You selected ${valueCompany}`}</p>  */}     


        <div className="row ">
            <h3>Feedback</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <td scope="col"><b>Feedback Id</b></td>
                    <td scope="col"><b>Feedback Description</b></td>
                    <td scope="col"><b>Customer Name</b></td>
                    <td scope="col"><b>Company Name</b></td>                    
                </tr>
            </thead>
            <tbody>
            {                    
                feedback.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.feedbackId}</td>
                            <td >{v.feedbackDesc}</td>
                            <td >{v.customerName}</td>
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
        </div>
    )
}
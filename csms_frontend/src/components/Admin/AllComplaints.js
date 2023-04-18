import React from 'react'
import {useEffect,useState} from 'react';
import { render } from 'react-dom';

export default function AllComplaint() {
    const [complaint,setComplaint] = useState([]); 
    const [valueCompany, setValueCompany] = useState([]);
    const [company,setCompany] = useState([]); 

    const getComplaint = (com) =>{
     //  let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getcomplaintresponse")
        .then(resp=>resp.json())
        .then(data=>setComplaint(data))
    }

    const getCompany = () =>{
        fetch("http://localhost:8080/approvedcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
     }
  

    useEffect(() => {
        getCompany();
        getComplaint(valueCompany);
       },[valueCompany]);

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
            <h3>Compaints</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
            <tr>
                    <td scope="col"><b>Complaint Id</b></td>
                    <td scope="col"><b>Customer Name</b></td>
                    <td scope="col"><b>Company Name</b></td>
                    <td scope="col"><b>Complaint Description</b></td>                    
                    <td scope="col"><b>Complaint Status</b></td>
                    
                </tr>
            </thead>
            <tbody>
            {                    
                complaint.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td>{v.complaintId}</td>
                            <td >{v.customerName}</td>
                            <td >{v.companyName}</td>
                            <td >{v.complaintDesc}</td>
                            <td >{v.complaintStatus}</td> 
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
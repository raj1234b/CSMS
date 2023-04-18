import React from 'react'
import {useEffect,useState} from 'react';

export default function PendingCompany() {
    const [company,setCompany] = useState([]);  
   
   
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/${id}/deletecompany`, {method: 'DELETE'})
        .then(function(response) {
            if(response.status === 200) {
               alert("company delete succesfully");
               getCompany();
             };
            })          
    }

    const handleApproved = (id) =>{
        fetch(`http://localhost:8080/approve/${id}`, {method: 'PUT'})
        .then(function(response) {
            if(response.status === 200) {
               alert("company is Approved");
               getCompany();
             };
        })   

    }
  
    const getCompany = () =>{
        fetch("http://localhost:8080/pendingcompany")
        .then(resp=>resp.json())
        .then(data=>setCompany(data))
    }
    useEffect(() => {        
        getCompany();
       },[])

        return (
        
        <div className="row ">
            <h3>Pending Company</h3>
            <div className="">
        <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {                    
                company.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.companyName}</td>
                            <td >{v.companyEmail}</td>
                            <td >{v.companyContactNo}</td>
                            <td >{v.companyCity}</td>
                            <td >{v.companyPincode}</td>
                            <td><button className='btn btn-success' onClick={() => { handleApproved(v.companyId)}}>Approve</button>
                            <button className='btn btn-danger' onClick={() => { handleDelete(v.companyId)}}>Delete</button></td>
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

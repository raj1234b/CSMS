import React from 'react'
import {useEffect,useState} from 'react';

export default function ListComplaint() {
    const [complaint,setComplaint] = useState([]); 
    const [valueComplaint,setValueComplaint] =useState([]);
    let com= (JSON.parse(localStorage.getItem("company")).companyId)
    const getComplaint = () =>{
        
        fetch("http://localhost:8080/"+com+"/getcomplaintresponse")
        .then(resp=>resp.json())
        .then(data=>setComplaint(data))
    }
    const handleComplaintStatus = (e)=>{
        setValueComplaint(e.target.value);
    }
    const updateComplaintStatus =(complaintid) =>
    {
        let id= complaintid;
        const reqData =(complaintid) = {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({                
                companyId: com,
                complaintStatus:valueComplaint           
            })    
        }
        fetch("http://localhost:8080/"+id+"/complaintstatus", reqData)
        .then(resp => resp.ok ? alert("Complaint Status updated successfully"): 
        alert("Failed to update Status !!!")) 
    }
    useEffect(() => {
        getComplaint();
       },[])

       return (        
        <div className="row ">
            <h3>Complaints</h3>
            <div className="">
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <td scope="col"><b>Complaint Id</b></td>
                    <td scope="col"><b>Customer Name</b></td>
                    <td scope="col"><b>Complaint Description</b></td>
                    <td scope="col"><b>Complaint Status</b></td>
                    <td scope="col"><b>Action</b></td>
                    
                </tr>
            </thead>
            <tbody>
            {                    
                complaint.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.complaintId}</td>
                            <td >{v.customerName}</td>
                            <td >{v.complaintDesc}</td>
                            <td >{v.complaintStatus}</td>
                            <td>
                            <div>
                                    <label><b>Complaint Status</b></label>                                    
                                    <select id="complaintstatus" name="complaintstatus" className='form-control' value={valueComplaint} onChange={handleComplaintStatus}>
                                    <option value="">Select Complaint Status</option>
                                        <option value="Complaint is Registered">Complaint is Registered</option>
                                        <option value="Assign to technical team">Assign to technical team</option>
                                        <option value="Working on complaint">Working on complaint</option>
                                        <option value="Request is Pending">Request is Pending</option>
                                        <option value="Complaint Resolved">Complaint Resolved</option>                                     
                                    </select>
                                    <br></br>
                                    <button className='btn btn-success' onClick={()=>updateComplaintStatus(v.complaintId)}>Update Status</button>
                                    </div>
                                </td> 
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
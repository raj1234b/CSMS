import React, { useEffect, useState } from 'react';
import AllComplaint from '../Admin/AllComplaints';
import AllFeedback from '../Admin/AllFeedback';
import ListedCompany from '../Admin/ListedCompany';
import PendingCompany from '../Admin/PendingCompany';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DashboardAd = () => {

    const [orderCount,setOrderCount] = useState([]);
    const [pendingRequest,setPendingRequest] = useState([]);
    const [complaintCount,setComplaintCount] = useState([]);
    const [feedbackCount,setFeedbackCount] = useState([]);

    const getOrderCount = () =>
    {
        fetch("http://localhost:8080/getcountoforderadmin")
        .then(resp=>resp.json())
        .then(data=>setOrderCount(data))
    }
    const getPendingCount = () =>
    {
        fetch("http://localhost:8080/getpendingcount")
        .then(resp=>resp.json())
        .then(data=>setPendingRequest(data))
    }
    const getComplaintCount = () =>
    {
        fetch("http://localhost:8080/getcomplaintcountadmin")
        .then(resp=>resp.json())
        .then(data=>setComplaintCount(data))
    }
    const getFeedbackCount = () =>
    {
        fetch("http://localhost:8080/getfeedbackcountadmin")
        .then(resp=>resp.json())
        .then(data=>setFeedbackCount(data))
    }

    useEffect(()=>
    {
        getOrderCount();
        getPendingCount();
        getComplaintCount();
        getFeedbackCount();
    },[orderCount,pendingRequest,complaintCount,feedbackCount])


    return (
    <div className="col main pt-5 mt-4" style={{paddingLeft:"30px",paddingRight:"20px"}}>
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2" >
                <div className="card bg-success text-white h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>                        
                        <h6 className="text-uppercase">All Orders</h6>
                        <h1 className="display-4">{orderCount}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-danger">
                        <h6 className="text-uppercase">Pending Request</h6>
                        <h1 className="display-4">{pendingRequest}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-info">
                        <h6 className="text-uppercase">Complaints</h6>
                        <h1 className="display-4">{complaintCount}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-warning h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body">
                        <div className="rotate">
                            <i className="fa fa-share fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Feedbacks</h6>
                        <h1 className="display-4">{feedbackCount}</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <div>         
            <Routes>
            <Route path="/home" element={<PendingCompany/>}/>
                <Route path="/company" element={<ListedCompany/>}/>
                <Route path="/pendingcompany" element={<PendingCompany/>}/>
                <Route path="/feedbacks" element={<AllFeedback/>}/>
                <Route path="/complaints" element={<AllComplaint/>}/>   
            </Routes>    
        </div>      
    </div>
    )
}
 
export default DashboardAd
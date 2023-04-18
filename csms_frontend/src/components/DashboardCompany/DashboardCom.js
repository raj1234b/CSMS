import React, { useEffect, useState } from 'react';
import AddDeliveryBoy from '../Company/AddDeliveryBoy';
import ListDeliveryBoy from '../Company/ListDeliveryBoy';
import ListVehicle from '../Company/ListVehicles';
import AddVehicle from '../Company/AddVehicle';
import ListCategoryPrice from '../Company/ListCategoryPrice';
import ListFeedback from '../Company/ListFeedback';
import ListComplaint from '../Company/ListComplaint';
import OrderRequest from '../Company/OrderRequest';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCompany from '../Company/HomeCompany';

export default function DashboardCom() {

    const [orderCount,setOrderCount] = useState([]);
    const [pendingRequest,setPendingRequest] = useState([]);
    const [complaintCount,setComplaintCount] = useState([]);
    const [feedbackCount,setFeedbackCount] = useState([]);

    let com = (JSON.parse(localStorage.getItem("company")).companyId)
    const getOrderCount = () =>
    {
        fetch("http://localhost:8080/"+com+"/getcountoforder")
        .then(resp=>resp.json())
        .then(data=>setOrderCount(data))
    }
    const getPendingCount = () =>
    {
        fetch("http://localhost:8080/"+com+"/getpendingcount")
        .then(resp=>resp.json())
        .then(data=>setPendingRequest(data))
    }
    const getComplaintCount = () =>
    {
        fetch("http://localhost:8080/"+com+"/getcomplaintcount")
        .then(resp=>resp.json())
        .then(data=>setComplaintCount(data))
    }
    const getFeedbackCount = () =>
    {
        fetch("http://localhost:8080/"+com+"/getfeedbackcount")
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

    return(
        <div className="col main pt-5 mt-3" style={{paddingLeft:"30px",paddingRight:"20px"}}>
    
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                            <i className="fa fa-user fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Courier Orders</h6>
                        <h1 className="display-4">{orderCount}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="fa fa-list fa-4x"></i>
                        </div>
                        <h6 className="text-uppercase">Pending Orders Request</h6>
                        <h1 className="display-4">{pendingRequest}</h1>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100" style={{boxShadow : "2px 3px 9px 0px rgba(0,0,0,.6)"}}>
                    <div className="card-body bg-info">
                        <div className="rotate">
                          <i className="fab fa-twitter fa-4x"></i>
                        </div>
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
                        <h6 className="text-uppercase">Feedback</h6>
                        <h1 className="display-4">{feedbackCount}</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <Routes>
                <Route path="/home" element={<HomeCompany/>}/>
                <Route path="/orders" element={<OrderRequest/>}/>
                <Route path="/deliveryboys/*" element={<ListDeliveryBoy/>}/>
                <Route path="/vehicles/*" element={<ListVehicle/>}/>
                <Route path="/categoryprice" element={<ListCategoryPrice/>}/>
                <Route path="/deliveryboys/form" element={<AddDeliveryBoy/>}/>
                <Route path="/vehicles/form" element={<AddVehicle/>}/>
                <Route path="/feedback" element={<ListFeedback/>}/>
                <Route path="/complaint" element={<ListComplaint/>}/>
            </Routes>           
        </div>       
        
    </div>
    )
}
import React from 'react';
import Complaint from '../Customer/Complaint';
import Feedback from '../Customer/Feedback';
import ListYourFeedback from '../Customer/ListYourFeedback';
import OrderForm from '../Customer/OrderForm';
import OrderInvoice from '../Customer/OrderInvoice';
import ListYourComplaint from '../Customer/ListYourComplaint';
import OrderTracking from '../Customer/OrderTracking';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function DashboardCus() {


    return(
    <div className="col main pt-5 mt-3" style={{paddingLeft:"30px",paddingRight:"20px"}}>
           
        <Routes>
            <Route path="/orderform" element={<OrderForm/>}/>
            <Route path="/trackingorder" element={<OrderTracking/>}/>
            <Route path="/orderinvoice" element={<OrderInvoice/>}/>
            <Route path="/feedback/*" element={<ListYourFeedback/>}/>
            <Route path="/feedback/form" element={<Feedback/>}/>
            <Route path="/complaint/*" element={<ListYourComplaint/>}/>
            <Route path="/complaint/form" element={<Complaint/>}/>
        </Routes>    

        </div>
    )
}
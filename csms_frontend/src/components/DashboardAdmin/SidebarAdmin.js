import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const SidebarAdmin = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor: "rgb(0, 78, 143)",maxHeight:"100%",height: "100vh",boxShadow: "0 0px 5px 8px rgba(0,0,0,.2)"}}>
            
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-2 mt-3 ">
                <li className="nav-item mb-2 mt-3"><Link className="nav-link text-secondary text-white" to="#"><h4>Admin</h4></Link></li>
                <li className="nav-item mb-2" ><Link className="nav-link text-secondary text-white" to="/adminpanel/home" >Home</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/adminpanel/company" >Registered Company</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/adminpanel/pendingcompany">Pending Company</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/adminpanel/feedbacks">Feedback</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/adminpanel/complaints">Complaint</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/login" onClick={()=>{localStorage.removeItem("admin")}}>Logout</Link></li>
            </ul>
       </div>
    )
}
 
export default SidebarAdmin

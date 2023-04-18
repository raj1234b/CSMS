import React from 'react'
import { Link } from 'react-router-dom'
const SidebarCompany = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor: "rgb(0, 78, 143)",maxHeight:"100%",height: "100vh",boxShadow: "0 0px 5px 8px rgba(0,0,0,.2)"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-2 mt-3 ">
            <li className="nav-item mb-2 mt-3"><Link className="nav-link text-secondary text-white" to="#"><h4>Welcome {(JSON.parse(localStorage.getItem("company")).companyName)}</h4></Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/home">Home</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/deliveryboys">Delivery Boy</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/vehicles">Vehicles</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/categoryprice">Category Pricing</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/feedback">Feedback</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/companypanel/complaint">Complaint</Link></li>
                <li className="nav-item mb-2"><Link className="nav-link text-secondary text-white" to="/login" onClick={()=>{localStorage.removeItem("company")}}>Logout</Link></li>
            </ul>
       </div>
    )
}
 
export default SidebarCompany

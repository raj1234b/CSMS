import React from 'react'
import { Link } from 'react-router-dom'
export const NavbarCustomer = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-#004E8F mb-3" style={{backgroundColor: "rgb(0, 78, 143)",boxShadow: "0 0px 4px 8px rgba(0,0,0,.2)"}}>
                <div className="flex-row d-flex " style={{marginLeft:"40px"}}>                    
                    <Link className="navbar-brand" to="/customerpanel/home" >Dashboard</Link>
                </div>
            
       </nav>
    )
}
export default NavbarCustomer
import React from 'react'
import SidebarCompany from './SidebarCompany';
import NavbarCompany from './NavbarCompany';
import DashboardCom from './DashboardCom';
import {  useNavigate } from 'react-router-dom';

export default function DashboardCompany() {   
const navigate = useNavigate();
const checkLogin =  ( ()=>
{    
    navigate("/login")
})
    
    return(
        <div onLoad={()=> {checkLogin()}}>
            
                <NavbarCompany/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SidebarCompany/>                  
                    <DashboardCom/>
             </div>
            </div>  
        </div>  

    );
}
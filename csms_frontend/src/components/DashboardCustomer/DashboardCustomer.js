import React from 'react'
import { useEffect, useState } from "react";
import SidebarCustomer from './SidebarCustomer';
import NavbarCustomer from './NavbarCustomer';
import DashboardCus from './DashboardCus';

export default function DashboardCustomer() {   

    return(
        <div>
                <NavbarCustomer/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SidebarCustomer/>                  
                    <DashboardCus/>
             </div>
            </div>  
        </div>  

    );
}
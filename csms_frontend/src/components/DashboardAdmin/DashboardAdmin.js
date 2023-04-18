import React from 'react'
import SidebarAdmin from './SidebarAdmin';
import NavbarAdmin from './NavbarAdmin';
import DashboardAd from './DashboardAd';

export default function DashboardAdmin() {   

    return(
        <div>
                <NavbarAdmin/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SidebarAdmin/>                  
                    <DashboardAd/>
             </div>
            </div>  
        </div>  

    );
}
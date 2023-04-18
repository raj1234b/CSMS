import React from 'react'
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";

export default function ListVehicle() {
    const [vehicle,setVehicle] = useState([]);  
   
    
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/${id}/deletevehicle`, {method: 'DELETE'})
        .then(function(response) {
            if(response.status === 200) {
               alert("vehicle deleted succesfully");
               getVehicle();
             };
            })          
    }

    const getVehicle = () =>{
        let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getvehicledetails")
        .then(resp=>resp.json())
        .then(data=>setVehicle(data))

    }
    useEffect(() => {
        getVehicle();
       },[])

    return (        
        <div className="row ">
            <h3>Vehicle List</h3>
            <div className="">
            <Link to="/companypanel/vehicles/form">
                <button type="button" class="btn btn-primary mb-3">Add New Vehicle</button>
            </Link>
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Vehicle No.</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {                    
                vehicle.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.vehiclesDetailsNo}</td>
                            <td><button className='btn btn-danger'onClick={() => { handleDelete(v.vehicleDetailsId)}}>Delete</button></td>
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

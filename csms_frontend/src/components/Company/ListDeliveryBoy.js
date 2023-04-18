import React from 'react'
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
export default function ListDeliveryBoy() {
    const [delivery,setDelivery] = useState([]);  

    
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/${id}/deletedeliveryboy`, {method: 'DELETE'})
        .then(function(response) {
            if(response.status === 200) {
               alert("Delivery Boy deleted succesfully");
               getDeliveryBoy();
             };
            })          
    }

    const getDeliveryBoy = () =>{
        let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getdeliverydetails")
        .then(resp=>resp.json())
        .then(data=>setDelivery(data))
    }
    useEffect(() => {
        getDeliveryBoy();
       },[])

    return (        
        <div className="row ">
            <h3>Delivery Boys</h3>
            <div className="">
            <Link to="/companypanel/deliveryboys/form">
                <button type="button" className="btn btn-primary mb-3" >Add New Delivery Boy</button>
            </Link>
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Age</th>
                    <th scope="col">License No.</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {                    
                delivery.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.deliveryBoyName}</td>
                            <td >{v.deliveryBoyEmail}</td>
                            <td >{v.deliveryBoyContactNo}</td>
                            <td >{v.deliveryBoyAge}</td>
                            <td >{v.deliveryBoyLicense}</td>
                            <td><button className='btn btn-danger'onClick={() => { handleDelete(v.deliveryBoyId)}}>Delete</button></td>
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

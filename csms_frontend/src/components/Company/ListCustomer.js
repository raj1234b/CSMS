import React from 'react'
import { useEffect, useState } from "react";

export default function ListCustomer() {

    const [customer,setCustomer] = useState([]);

    useEffect(()=>
    {
        fetch("http://localhost:8080/getallcustomer")
        .then(resp=>resp.json())
        .then(data=>setCustomer(data))
    },[]);

    return(
    <div className="col main pt-5 mt-3">
        <h3>Customer List</h3>
      <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Pincode</th>
                </tr>
            </thead>
            <tbody>
            {                    
                customer.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.customerName}</td>
                            <td >{v.customerEmail}</td>
                            <td >{v.customerContactNo}</td>
                            <td >{v.customerCity}</td>
                            <td >{v.customerPincode}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
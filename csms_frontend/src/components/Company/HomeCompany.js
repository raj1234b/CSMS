import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function HomeCompany() {
    const [orders,setOrders] = useState([]);
    let com = (JSON.parse(localStorage.getItem("company")).companyId)

    const navigate = useNavigate();
    const getOrderDetails = () =>
    {    console.log("fetch order")
        fetch("http://localhost:8080/"+com+"/companyorder")
        .then(resp => resp.json())
        .then(data =>setOrders(data))
    }
    const handleSubmit =(e)=>{
        localStorage.setItem("orderid",e);
        navigate("/companypanel/orders");
    }

    useEffect(()=>
    {
        getOrderDetails();
    },[])
  return (
    <div class="container-xl">
        <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Order Details</h2>
                    </div>             
                </div>
            </div>
        <div class="table-filter">               
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>						
                        <th>Status</th>						
                        <th>Net Amount</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        orders.map((v)=>
                        {
                            return(
                                <tr scope="row">
                                    <td>#</td>
                                    <td><b>{v.order.courierDetailsId}</b></td>
                                    <td>{v.customer.customerName}</td>
                                    <td>{v.order.requestTime}</td>
                                    <td>{v.order.trackingStatus}</td>
                                    <td>&#8377;&nbsp;{v.categoryPrice.categoryPrice}</td>                                    
                                    <td><button className='btn btn-success' onClick={()=>{handleSubmit(v.order.courierDetailsId)}} >Update</button></td>                                    
                                </tr>
                                
                            )
                        })
                    } 
                                        
                </tbody>
            </table>            
        </div>
    </div>        
</div>
</div>
  )
}

import React, { useEffect, useState } from 'react';
//import { ReactDOM } from  'react-dom';
//import useForceUpdate from 'use-force-update';

export default function OrderRequest() {
    const [orders,setOrders] = useState([]);
    const [delivery,setDelivery] = useState([]); 
    const [valueDelivey,setValueDelivery] = useState([]);
    const [vehicle,setVehicle] = useState([]);
    const [valueVehicle,setValueVehicle] = useState([]);
    const [valueTracking,setValueTracking] =useState([]);
    const [isTag,setTag] = useState(false);
    //const [rerender, setRerender] = useState(false);

    //const forceUpdate = useForceUpdate();
    let com = (JSON.parse(localStorage.getItem("company")).companyId)
    let trackid = (JSON.parse(localStorage.getItem("orderid")))
    const getOrderDetails = () =>
    {    console.log("fetch order")
        fetch("http://localhost:8080/"+com+"/companyorder")
        .then(resp => resp.json())
        .then(data =>setOrders(data))
    }

    const getDeliveryBoy = () =>{
        console.log("fetch delivery")
        fetch("http://localhost:8080/"+com+"/getdeliverydetails")
        .then(resp=>resp.json())
        .then(data=>setDelivery(data))
    }

    const getVehicle = () =>{
        console.log("fetch vehicle")
        fetch("http://localhost:8080/"+com+"/getvehicledetails")
        .then(resp=>resp.json())
        .then(data=>setVehicle(data))
    }

    const update = (orderId) =>
    {
       
        console.log(orderId);
        let id = orderId
        console.log()
        const reqData =(orderId) = {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({                
                companyId: com,
                deliveryBoyId: valueDelivey,
                vehiclesDetailsId: valueVehicle            
            })    
        }
        fetch("http://localhost:8080/"+id+"/approveorder", reqData)
        .then(resp => resp.ok ? alert("delivery boy & vehicle updated successfully"): 
        alert("Failed"));       
        
    }

    const updateTracking = (orderId) =>
    {

        console.log(valueTracking)
        let id = orderId
        const reqData =(orderId) = {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({                
                companyId: com,
                trackingStatus:valueTracking           
            })    
        }
        fetch("http://localhost:8080/"+id+"/trackingstatus", reqData)
        .then(resp => resp.ok ? alert("Tracking Status updated successfully"): 
        alert("Failed to update Status !!!"))     
       // forceUpdate();
    }

    useEffect(()=>
    {
        getVehicle();
        getDeliveryBoy();
        getOrderDetails();
    },[])

    const handleDeliveryChange =  (e) => {
        setValueDelivery(e.target.value);
      };
    const handleVehicleChange = (e) => {
        setValueVehicle(e.target.value);
    };
    const handleTrackingStatus = (e) => {
        setValueTracking(e.target.value);
    }

  return (
    <div>
        <div>
        <h1>Courier Orders</h1>
        <div className=" table-responsive" >                        
            <table className="ordertable table table-striped" style={{textAlign :"left"}}>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Order Details</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((v)=>
                    {
                        if(trackid==v.order.courierDetailsId){
                        return(
                           
                            <tr scope="row">
                                <td>
                                    <p><b>Courier Order No. : {v.order.courierDetailsId}</b></p>
                                    <p><b>Customer Name :</b> {v.customer.customerName}</p>
                                    <p><b>Customer Contact Details :</b> {v.customer.customerEmail}</p>
                                    <p><b>Pick-up Address :</b> {v.order.pickupAddress}</p>
                                    <p><b>Receiver Name :</b> {v.order.receiverName}</p>
                                    <p><b>Delivery Address :</b> {v.order.deliveryAddress}</p>
                                    <p><b>Payment Status :</b> {v.order.paymentStatus}</p>
                                    <p><b>Delivery Boy Allocated : </b>{ v.order.deliveryBoyId!=null ? v.deliveryBoy.deliveryBoyName: ""}</p>
                                    <p><b>Vehicle Details : </b>{ v.order.vehiclesDetailsId!=null ? v.vehicleDetails.vehiclesDetailsNo: ""}</p>
                                    <p><b>Category :</b> {v.categoryPrice.category.categoryName}</p>
                                    <p><b>Total Price :</b> &#8377;&nbsp;{v.categoryPrice.categoryPrice}</p>
                                    <p><b>Tracking Status :</b> {v.order.trackingStatus}</p>
                                </td>
                                <td>
                                    <div>
                                    <div>
                                    <label><b>Delivery Boys</b></label>
                                    <select id="deliveryboy"name="deliveryboy" className='form-control' value={valueDelivey} onChange={handleDeliveryChange}>
                                        <option value="">Select Delivery Boy</option>
                                        {
                                            delivery.map((delivery)=>(
                                                <option value={delivery.deliveryBoyId}>{delivery.deliveryBoyName}</option>
                                            ))
                                        }
                                    </select>
                                    </div>
                                    <br></br>

                                    <div>
                                    <label><b>Vehicles</b></label>
                                    <select id="vehicle"name="vehicle" className='form-control' value={valueVehicle} onChange={handleVehicleChange}>
                                        <option value="">Select Vehicle</option>
                                        {
                                            vehicle.map((vehicle)=>(
                                                <option value={vehicle.vehicleDetailsId}>{vehicle.vehiclesDetailsNo}</option>
                                            ))
                                        }
                                    </select>
                                    </div>
                                    <br></br>
                                    <button className='btn btn-success' onClick={()=>{ update(v.order.courierDetailsId)}}>Update</button>
                                    </div>
                                    <br></br>
                                    <div>
                                    <label><b>Tracking Status</b></label>                                    
                                    <select id="trackingstatus" name="trackingstatus" className='form-control' value={valueTracking} onChange={handleTrackingStatus}>
                                        <option value="">Select Tracking Status</option>
                                        <option value="Order Placed">Order Placed</option>
                                        <option value="Order Pick-up">Order Pick-up</option>
                                        <option value="Order Arrived">Order Arrived</option>
                                        <option value="Order out of Delivery">Order out of Delivery</option>
                                        <option value="Order Delivered">Order Delivered</option>                                      
                                    </select>
                                    <br></br>
                                    <button className='btn btn-success' onClick={()=>{updateTracking(v.order.courierDetailsId) }}>Update Status</button>
                                    </div>
                                </td>
                            </tr>
                        )
                                    }
                                    else { <p></p>}
                    })
                }
            </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

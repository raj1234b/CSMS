import React, { useEffect, useState } from 'react'
import "../../styles/Invoice.css";
export default function OrderInvoice() {
  
  const [invoice,setInvoice] = useState([]);
  const [valueOrder,setValueOrder] = useState([]);
  const getInvoice = ()=>
  {
        let customerId = (JSON.parse(localStorage.getItem("customer")).customerId)
        fetch("http://localhost:8080/"+customerId+"/invoice")
        .then(resp => resp.json())
        .then(data => setInvoice(data))
  }
  const handleOrderChange =  (e) => {
    setValueOrder(e.target.value);
  };
  useEffect(()=>
  {
    getInvoice();
  },[])

    return (
        
    <div className=''>
        <div>
            <label><b>Your Orders </b></label>
            <select id="selectorder"name="selectorder" className='form-control' value={valueOrder} onChange={handleOrderChange}>
                <option value="">Select Order</option>
                {
                    invoice.map((invoice)=>(
                        <option value={invoice.trackingId}>{invoice.trackingId}</option>
                    ))
                }
            </select>
        </div>

        {
            invoice.map((invoice)=>
            {
                if(invoice.trackingId==valueOrder)
                {
                    return(

                        <div className='card-body mx-4'>
                        <div className='container'>
                    <p className="myptag my-4 mx-5" style={{fontSize: "30px"}}>Order Details</p>
                    <hr/>
                    <div>
                    <table className="table table-borderless" id='invoicetable'>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th>Courier Tracking ID :</th><td><b>{invoice.trackingId}</b></td></tr>
                            <tr><th>Customer Details :</th><td>{invoice.customerName}</td></tr>
                            <tr><th></th><td>{invoice.customerEmail}</td></tr>
                            <tr><th></th><td>{invoice.customerContactNo}</td></tr>
                            <tr><th>Company Details :</th><td>{invoice.companyName}</td></tr>
                            <tr><th></th><td>{invoice.companyEmail}</td></tr>
                            <tr><th></th><td>{invoice.companyContactNo}</td></tr>
                            <tr><th>Allocated Delivery Boy :</th><td>{invoice.deliveryBoyName}</td></tr>
                            <tr><th></th><td>{invoice.deliveryBoyEmail}</td></tr>
                            <tr><th></th><td>{invoice.deliveryBoyContactNo}</td></tr>
                            <tr><th>Allocated Vehicle :</th><td>{invoice.vehiclesDetailsNo}</td></tr>
                            <tr><th>Courier Details :</th><th></th></tr>
                            <tr><th>Courier Pick-up Address :</th><td>{invoice.pickupAddress}</td></tr>
                            <tr><th>Courier Receiver Name :</th><td>{invoice.receiverName}</td></tr>
                            <tr><th>Courier Delivery Address :</th><td>{invoice.deliveryAddress}</td></tr>
                            <tr><th>Place Order Date&Time :</th><td>{invoice.orderDateTime}</td></tr>
                            <tr><th>Tracking Status :</th><td>{invoice.trackingStatus}</td></tr>
                            <tr><th>Courier Category :</th><td>{invoice.categoryName}</td></tr>
                            <tr><th>Total Price :</th><td>{invoice.categoryPrice}</td></tr>
                            <tr><th>Payment Status :</th><td>{invoice.paymentStatus}</td></tr>
                        </tbody>
                    </table>
                            </div>
                        </div>
                    </div>
                    )
                }
                else
                {
                    return (
                        <div></div>
                    )
                }
            })
        }

    </div>
  )
}

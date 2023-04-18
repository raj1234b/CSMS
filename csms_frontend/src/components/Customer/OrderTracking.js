import React from 'react'
import "../../styles/OrderTracking.css";
export default function OrderTracking() {
  const data = [ 
    {label: "AMT Dispatch", eventDate : "20221-12-21"},
    {label: "NGP Dispatch", eventDate : "20221-12-21"},
    {label: "YTL Dispatch", eventDate : "20221-12-21"},
  ]
  return (
    <div className='orderTrackingBody'><section class="root">
    <figure>
      <figcaption>
        <h4>Tracking Details</h4>
        <h6>Order Number</h6>
        <h2># A61452B</h2>
      </figcaption>
    </figure>
    <div class="order-track">
      {data.map(d => (<div class="order-track-step">
        <div class="order-track-status">
          <span class="order-track-status-dot"></span>
          <span class="order-track-status-line"></span>
        </div>
        <div class="order-track-text">
          <p class="order-track-text-stat">{d.label}</p>
          <span class="order-track-text-sub">{d.eventDate}</span>
        </div>
      </div>))}
    </div>
  </section></div>
  )
}

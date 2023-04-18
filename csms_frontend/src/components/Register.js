import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Registration.css";

export default function Register() {
  return (
    <div className="home1">
    <div className="headerContainer1">
        <Link to="/company">
        <button type="button" class="btn btn-primary">Register as Company</button>
        </Link>
        <Link to="/customer">
        <button type="button" class="btn btn-primary" >Register as Customer</button>
        </Link>
    </div>
</div>
    
  )
}

import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Background from "../images/front_page_background.jpg";

function Home() {

    return (
        <div className="home" style={{ backgroundImage: `url(${Background})` }}>
            <div className="headerContainer">
                <Link to="/login">
                <button type="button" class="btn btn-primary">Login Here</button>
                </Link>
                <Link to="/register">
                <button type="button" class="btn btn-primary" >Register Here</button>
                </Link>
            </div>
        </div>
     
    );
  }
  
  export default Home;
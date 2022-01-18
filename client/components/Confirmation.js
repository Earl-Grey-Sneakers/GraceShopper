import React from "react";
import { Link } from "react-router-dom";


const Confirmation = () => {
    return (
        <div className="divBelowNavbar">
            <div  className="confirmationDiv">
                <h1>Thank you for order!</h1>
                <Link to='/'>
                    Send me back to the main page
                </Link>
            </div>
        </div>
        
    )
}

export default Confirmation
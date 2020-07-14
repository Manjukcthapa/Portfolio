import React from "react"
import "./contact.css";

class Contact extends React.Component {
render(){
    return(
        <div className="contact">
           <div>
               <h2>MY Phone</h2>
               <p>8162660106</p>
           </div> 
           <div>
               <h2>Email Address</h2>
               <p>kcmanjuthapa@gmail.com</p>
           </div> 
           <div>
           <h2>Location</h2>
           <p>West Paces Ferry Rd, GA</p>
           </div>
        </div>
    )
}

}

export default Contact;
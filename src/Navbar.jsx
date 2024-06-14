import Cartwidget from "./cartWidget/Cartwidget";
import "./navbar.css"


export const Navbar = () => {
    
    return ( 
        
<div className="navbarcontainer">
     
      <h2>logo</h2>
   
    <ul style={{ display : "flex", gap : "20px"}}>
        <li>todas </li>
        <li>urbanas </li>
        <li> deportivas</li>
        
    </ul> 

      <Cartwidget/>

    </div>
    );
};

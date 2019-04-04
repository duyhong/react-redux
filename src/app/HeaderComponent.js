import {NavLink} from "react-router-dom";
import React from "react";
//functional or stateless components
const Header = (props) => {
    var props = props;    
    return(
        <div>
            <NavLink to="/child" activeClassName="red"> {"Child Component"} </NavLink>
            <NavLink to="/new" activeClassName="red">{"New Component"} </NavLink>
        </div>
    )
}

export const Footer = (props) =>{
    return(
        <div>
            <h1>{props.display ? props.msg :"This my own message for footer" }</h1>
        </div>
    )
}

export const Body = (props) =>{
    return(
        <div>
            <h1>{ "This my own message for body"}</h1>
        </div>
    )
}

export default Header;
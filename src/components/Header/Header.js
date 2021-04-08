import * as ReactBootStrap from 'react-bootstrap';

import { UserContext } from '../../App';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const {name,photo} = loggedInUser;
    var link ={
        color:"Black",
        textDecoration:"none",
        fontWeight: "bold"
    }

    return (
        
        
        <div >
            
            <ReactBootStrap.Navbar fixed="top" collapseOnSelect expand="lg"  variant="light" bg="light">
                <ReactBootStrap.Navbar.Brand><Link to="/home"> <img style={{width:"150px"}} src={logo} alt=""></img></Link></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">


                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link ><FontAwesomeIcon  style={{fontSize:"25"}} icon={faShoppingCart} /></ReactBootStrap.Nav.Link>
                     
                        <ReactBootStrap.Nav.Link href="/home"><button className="btn btn-danger">{name?.length > 0 ?'Log Out': 'Log In'}</button></ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#">{name?.length > 0 ?<button className="btn btn-danger"><img style={{width:"30px",borderRadius :"50%"}} src={photo} alt=""/> {name}</button> :null}</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>
    );
};

export default Header;
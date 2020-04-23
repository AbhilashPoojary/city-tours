import React from 'react';
import "./Navbar.scss"
import logo from "../logo.png"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.toggleClass=this.toggleClass.bind(this);
    }
    toggleClass(e){
        let classes = 'nav-link';
        let els = document.getElementsByClassName('nav-link active');
        console.log(els);
        
        if(els){
            while (els[0]) {
                console.log(els);   
                els[0].classList.remove('active')
                
            }
        }
        e.target.className = classes.replace('nav-link','nav-link active');
    }

    render(){
        return (
            <nav className="navbar">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/Home" className="nav-link" onClick={(e) =>this.toggleClass(e)}>home</Link>
                    </li>
                    <li>
                        <Link to="/About" className="nav-link" onClick={(e) =>this.toggleClass(e)}>about</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link active" onClick={(e) =>this.toggleClass(e)}>tours</Link>
                    </li>
                </ul>
            </nav>
        );

    }
}

export default Navbar;
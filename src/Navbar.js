import React, { Component } from 'react';
import './NavAndFooter.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {
    
    render() { 
        return (
            <nav className='box-Nav'>
                <div>
                <a>Home</a>
                <a>About us</a>
                <a onClick={()=>alert("Hi,This is Shiva,my email is: shivsheikh77@gmail.com")}>Contact Us</a>
                </div>
               

            </nav>
        );
    }
}
 
export default Navbar;
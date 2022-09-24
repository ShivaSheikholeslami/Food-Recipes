import React from 'react';
import { Component } from 'react';
import './NavAndFooter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';



class Footer extends Component {
    
    render() { 
        return (
            <div className='box-Footer'>
                <div>
                <p>Created by Shiva Sheikholeslami 2022</p>
                <div>

                <div className='icons'>
                {/* <a><i className='bi bi-facebook'></i></a> */}
                <Icon icon="bi:facebook" className='blue'/>
                <Icon icon ="bi:instagram" className='pink'/>
                <Icon icon="bi:twitter"  className='blue'/>
                <p>salam</p>
                    {/* <i className="facebook"></i> */}
                </div>
            </div>
        );
    }
}
 
export default Footer;
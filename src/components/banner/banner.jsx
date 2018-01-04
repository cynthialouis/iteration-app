import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

class Banner extends Component {
    render() {
        return (
            <div>
                <div className="banner flex-container">
                    <img src={logo} alt="logo" className="logo flex-item"/>
                    <Link to='/' className="flex-item">
                        <span>HOME</span>
                    </Link>
                    <Link to='/' className="flex-item">
                        <span>NEXT SPRINT</span>
                    </Link>
                    <Link to='/' className="flex-item">
                        <span>ADMIN</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Banner;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../variables';
import T from 'i18n-react';
import logo from '../../images/logo.svg';

class Banner extends Component {
    render() {

        return (
            <div>
                <div className='banner flex-container'>
                    <img src={logo} alt='logo' className='logo flex-item'/>
                    <Link to='/' className='flex-item'>
                        <span>{ T.translate('menu.home') }</span>
                    </Link>
                    <Link to='/' className='flex-item'>
                        <span>{ T.translate('menu.next_sprint') }</span>
                    </Link>
                    <Link to='/admin' className='flex-item'>
                        <span>{ T.translate('menu.admin') }</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Banner;

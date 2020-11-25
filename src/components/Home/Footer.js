import React from 'react';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__elements">
            <span className='footer__text'>CopyRight by CodersLab</span>
            <a className='icons__el' href=''><img src={Facebook} alt="facabook"/></a>
            <a className='icons__el el--icon' href=''><img src={Instagram} alt="instagram"/></a>
            </div>
        </footer>
    )
}

export default Footer;
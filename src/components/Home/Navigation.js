import React from 'react';
import {Link} from 'react-scroll';

const Navigation = () => {
    return (
        <>
            <div className="nav__container">
                <div className='nav__log'>
                    <Link className='nav__login link--mod'>Zaloguj</Link>
                    <Link className='nav__register link--mod'>Załóż konto</Link>
                </div>
                <div className='nav'>
                    <Link to='/' className='nav__el link--mod el--start'>Start</Link>
                    <Link to='simpleSteps' smooth={true} duration={850} className='nav__el'>O co chodzi?</Link>
                    <Link to='aboutUs' smooth={true} duration={850} className='nav__el'>O nas</Link>
                    <Link to='fundation' smooth={true} duration={850} className='nav__el'>Fundacje i Organizacje</Link>
                    <Link to='contactUs' smooth={true} duration={850} className='nav__el el--end'>Kontakt</Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;
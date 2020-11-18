import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';

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
                    <ScrollLink className='nav__el'>O co chodzi?</ScrollLink>
                    <ScrollLink className='nav__el'>O nas</ScrollLink>
                    <ScrollLink className='nav__el'>Fundacje i Organizacje</ScrollLink>
                    <ScrollLink className='nav__el el--end'>Kontakt</ScrollLink>
                </div>
            </div>
        </>
    )
}

export default Navigation;
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navigation from "./Navigation";

const HomeHeader = () => {
    return(
        <header className='home__header'>
            <div className="header__photo">
                <div className='header__img'></div>
            </div>
            <div className="header__info">
                <Navigation/>
                <div className="header__title">Zacznij Pomagać!</div>
                <div className="header__title">Oddaj niechciane rzeczy w zaufane ręce</div>
                <div className="header__decoration"></div>
                <div className="header__btns">
                    <Link className="header__btn link--mod">
                        <span>oddaj</span>
                        <span>rzeczy</span>
                    </Link>
                    <Link className="header__btn link--mod">
                        <span>zorganizuj</span>
                        <span>zbiórkę</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;
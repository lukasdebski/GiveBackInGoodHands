import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const HomeSimpleSteps = () => {
    return (
        <>
            <section className="steps">
                <div className="steps__header">
                    <h1 className='steps__title'>Wystarczą 4 proste kroki</h1>
                    <div className="steps__decoration"></div>
                </div>
                <div className="steps__elements">
                    <div className="steps__el">
                        <div className="el__icon1"></div>
                        <p className='el__text el--bor'>Wybierz rzeczy</p>
                        <p className='el__text'>ubrania, zabawki,<br/> sprzęt i inne</p>
                    </div>
                    <div className="steps__el">
                        <div className="el__icon2"></div>
                        <p className='el__text el--bor'>Spakuj je</p>
                        <p className='el__text'>skorzystaj z <br/> worków na smieci</p>
                    </div>
                    <div className="steps__el">
                        <div className="el__icon3"></div>
                        <p className='el__text el--bor'>Zdecyduj komu <br/> chcesz pomóc</p>
                        <p className='el__text'>wybierz zaufane miejsce</p>
                    </div>
                    <div className="steps__el">
                        <div className="el__icon4"></div>
                        <p className='el__text el--bor'>Zamów kurriera</p>
                        <p className='el__text'>kurrier przyjedzie <br/> w dogodnym terminie</p>
                    </div>
                </div>

                <Link>
                    <span>oddaj</span>
                    <span>rzeczy</span>
                </Link>
            </section>
        </>
    )
}

export default HomeSimpleSteps;
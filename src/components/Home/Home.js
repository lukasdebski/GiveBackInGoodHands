import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
    return (
        <div className='home container'>
            <HomeHeader/>
            <HomeThreeColumns/>
        </div>
    )
}

export default Home;
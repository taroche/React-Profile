  
import React from 'react';

import HeroHome from '../components/HeroHome';
import Carousel from '../components/Carousel';


function HomePage(props) {
    return (
        <div className='homePage'>
            <HeroHome title={props.title} subTitle={props.subTitle} text={props.text} />
            <h1 className="heroTitle text-center display-3 mb-5">Web Projects</h1>
            <Carousel/>       
        </div>
    );
}

export default HomePage;
import React from 'react';
import AtGlance from './AtGlance';
import Services from './Services';
import Works from './Works';
import Tech from './Tech';
import Faq from './Faq';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div>
            
            <AtGlance></AtGlance>
            <Services></Services>
            <Works></Works>
            <Tech></Tech>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;
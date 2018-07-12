import React from 'react';
import './AboutOurWorking.css'
import icon from '../../imagies/icons/icon_in_our_working.png'

const AboutOurWorking = () => {
    return (
        <section className="section about_our_working_block">
            <a id="how_it_works"/>
            <div className="container about_our_working_container">
                <img src={icon} className="icon"/>
                <h1 className="about_our_working_capt">Our work is the presentation of our capabilities.</h1>
                <p className="about_our_working_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p className="about_our_working_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
            </div>
        </section>
    );
};

export default AboutOurWorking;

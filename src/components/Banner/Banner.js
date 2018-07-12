import React from 'react';
import TopLine from "./TopLine/TopLine";
import "./Banner.css"

const Banner = () => {
    return (
        <section className="banner_block section">
                <TopLine/>
            <div className="container banner_container">
                <div className="desc">
                    <h1 className="desc_capt">Intellectual Property has the Shelf Life</h1><span className="desc_capt_small">of a Banana.</span>
                    <div className="btn_become_member btn_common"><a href="#" className="btn_link_become_member btn">Become a Member</a></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

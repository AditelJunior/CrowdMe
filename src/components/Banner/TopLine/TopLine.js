import React from 'react';
import logo from '../../../imagies/logo/logo_crowdme.png';
import Navigation from "./Navigation/Navigation";
import hamburger from "../../../imagies/icons/hamburger_icon.png";


const TopLine = () => {
    return (
        <div className="top_line">
            <div className="container">
                <div className="logo">
                    <img src={logo} className="logo_img"/><span className="logo_crowdme">crowdme</span>
                </div>
                <Navigation/>
                <div className="btn_log_in_wrap btn_common">
                    <a href="#" className="btn_link_log_in_wrap btn">Login</a>
                </div>
                <div className="hidden_navigation">
                    <a className="mini_menu" >
                        <img src={hamburger} className="hamburger_icon"/>
                    </a>
                    <Navigation navType="hidden_nav_item" navLinkType="hidden_nav_link" />
                </div>
            </div>
        </div>
    );
};

export default TopLine;

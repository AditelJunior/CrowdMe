import React from 'react';
import './Tabulations.css';
import glasses from '../../imagies/icons/glasses.png';
import hat from '../../imagies/icons/hat.png';
import team from '../../imagies/icons/team.png';

// import {Link, Route, Switch} from "react-router-dom";
import {TabContent, TabLink, Tabs} from "react-tabs-redux";

const Tabulations = () => {
    return (
        <section className="section tabulations_block">
            <div className="container tabulations_container">
                <Tabs>
                    <div className="tabulations_btns">
                        <TabLink to="simple" className="tab_btn">
                           <span className="number_in_round">1</span> Simple
                        </TabLink>
                        <TabLink to="transparent" className="tab_btn">
                            <span className="number_in_round">2</span>
                            Transparent
                        </TabLink>
                        <TabLink to="collaborative" className="tab_btn">
                            <span className="number_in_round">3</span>
                            Collaborative
                        </TabLink>
                    </div>
                    <div className="tabs_content">
                        <TabContent for="simple" className="tabs_content_item">
                            <div className="tabs_left_side">
                                <img src={glasses} className="tabs_img"/>
                            </div>
                            <div className="tabs_right_side tabs_half">
                                <h1 className="caption_tabs">Browse projects, like booking a hotel online ! Simple</h1>
                                <p className="text_tabs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </TabContent>
                        <TabContent for="collaborative" className="tabs_content_item">
                            <div className="tabs_left_side">
                                <img src={team} className="tabs_img"/>
                            </div>
                            <div className="tabs_right_side tabs_half">
                                <h1 className="caption_tabs">Browse projects, like booking a hotel online ! Collaborative</h1>
                                <p className="text_tabs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </TabContent>
                        <TabContent for="transparent" className="tabs_content_item">
                            <div className="tabs_left_side">
                                <img src={hat} className="tabs_img"/>
                            </div>
                            <div className="tabs_right_side tabs_half">
                                <h1 className="caption_tabs">Browse projects, like booking a hotel online ! Transparent</h1>
                                <p className="text_tabs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Tabulations;

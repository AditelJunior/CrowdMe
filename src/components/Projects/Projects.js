import React from 'react';
import './Projects.css';
// import picture from '../../imagies/projects_img.jpg'
import triangle from "../../imagies/icons/triangle.png"

const Projects = () => {
    return (
        <section className="section projects_block">
            <a id="discover_projects"/>
            <div className="container project_container">
                <div className="projects_block_top">
                    <div className="featured_info">
                        <h1 className="capt_featured">Featured Projects</h1>
                        <p className="text_featured">Brief details of new and popular projects. To view full listings, you will be required to
                            sign up and become a member.</p>
                    </div>
                    <div className="btn_featured">
                        <a href="#" className="btn_link_featured btn btn_common">Become a Member</a>
                    </div>
                </div>
                <div className="projects_list">
                    <div className="project_item">
                        <div className="project_img"><div className="project_band">New</div></div>
                        <div className="project_info">
                            <h1 className="project_capt">Ontario Tower, London</h1>
                            <p className="project_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="fund_in_procent"/>
                            <div className="fund_info"><span className="fund_procents">25% funded</span><span className="days_info">8 days left</span></div>
                            <hr/>
                            <div className="see_project_wrapper">
                                <a href="#" className="btn_see_project">See project details <img src={triangle} className="triangle_icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="project_item">
                        <div className="project_img"><div className="project_band">New</div></div>
                        <div className="project_info">
                            <h1 className="project_capt">Ontario Tower, London</h1>
                            <p className="project_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="fund_in_procent"/>
                            <div className="fund_info"><span className="fund_procents">25% funded</span><span className="days_info">8 days left</span></div>
                            <hr/>
                            <div className="see_project_wrapper">
                                <a href="#" className="btn_see_project">See project details <img src={triangle} className="triangle_icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="project_item">
                        <div className="project_img"><div className="project_band">New</div></div>
                        <div className="project_info">
                            <h1 className="project_capt">Ontario Tower, London</h1>
                            <p className="project_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="fund_in_procent"/>
                            <div className="fund_info"><span className="fund_procents">25% funded</span><span className="days_info">8 days left</span></div>
                            <hr/>
                            <div className="see_project_wrapper">
                                <a href="#" className="btn_see_project">See project details <img src={triangle} className="triangle_icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';
import './Find.css';
import sofa from '../../imagies/icons/sofa.png';
import purse from '../../imagies/icons/purse.png';

const Find = () => {
    return (
        <section className="section find_block">
            <a id="find_out_more"/>
            <div className="container find_block">
                <div className="find_left_side find_sides">
                    <div className="icon_find">
                        <img src={sofa} className="find_image"/>
                    </div>
                    <div className="find_info">
                        <h1 className="capt_find">Find properties</h1>
                        <p className="text_find">
                            Sign up to browse the portfolio.
                            Your journey to becoming a real estate baron starts here.
                        </p>
                        <div className="btn_submit_become btn_find_item btn_common">
                            <a href="#" className="btn_link_become btn btn_link_find">Become a member</a>
                        </div>
                    </div>
                </div>
                <div className="find_right_side find_sides">
                    <div className="icon_find">
                        <img src={purse} className="find_image"/>
                    </div>
                    <div className="find_info">
                        <h1 className="capt_find">Find properties</h1>
                        <p className="text_find">
                            Sign up to browse the portfolio.
                            Your journey to becoming a real estate baron starts here.
                        </p>
                        <div className="btn_submit_project btn_find_item btn_common">
                            <a href="#" className="btn_link_submit_project btn btn_link_find">Submit your project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Find;

import React, {Fragment} from 'react';
import partners from '../../imagies/partners.png'
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>
            <section className="section footer_block">
                <div className="container footer_container">
                    <div className="partners">
                        <img src={partners} className="img_partners"/>
                    </div>
                </div>
            </section>
            <hr className="dividing_line"/>
            <div className="copyrights">
                Copyright © 2001 - 2014  Cssauthor.com
            </div>
        </Fragment>

    );
};

export default Footer;

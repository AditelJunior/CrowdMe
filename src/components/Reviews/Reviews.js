import React from 'react';
import './Reviews.css';
import David from '../../imagies/David.png'

const Reviews = () => {
    return (
        <section className="section reviews_block">
            <a id="blog"/>
            <div className="container reviews_container">
               <div className="info_about_reviews">
                   <h1 className="reviews_capt">Be Part of a Growing International Community</h1>
                   <p className="reviews_text">One of the challenges in networking is everybody thinks it's making cold calls to strangers. Actually, it's the people who already have strong trust relationships with you</p>
               </div>
                <div className="reviews_list">
                    <div className="reviews_item">
                       <div className="dialog_cloud">
                           <h2 className="reviews_item_capt">One of the Best</h2>
                           <p className="reviews_item_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</p>
                           <div className="triangle_cloud"/>
                       </div>
                        <div className="reviews_author">
                            <img src={David} className="image_author"/>
                            <span className="author">David Beckham</span>
                        </div>
                    </div>
                    <div className="reviews_item">
                       <div className="dialog_cloud">
                           <h2 className="reviews_item_capt">Exellent Service</h2>
                           <p className="reviews_item_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</p>
                           <div className="triangle_cloud"/>
                       </div>
                        <div className="reviews_author">
                            <img src={David} className="image_author"/>
                            <span className="author">David Beckham</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

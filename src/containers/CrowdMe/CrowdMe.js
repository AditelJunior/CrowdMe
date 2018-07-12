import React, {Component, Fragment} from 'react';
import './CrowdMe.css';
import Banner from "../../components/Banner/Banner";
import AboutOurWorking from "../../components/AboutOurWorking/AboutOurWorking";
import Tabulations from "../../components/Tabulations/Tabulations";
import Find from "../../components/Find/Find";
import Projects from "../../components/Projects/Projects";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
// import "../../fonts/open_sans/styles.css"

class CrowdMe extends Component {
  render() {
    return (
        <Fragment>
            <Banner/>
            <AboutOurWorking/>
            <Tabulations/>
            <Find/>
            <Projects/>
            <Reviews/>
            <Footer/>
        </Fragment>
    );
  }
}

export default CrowdMe;

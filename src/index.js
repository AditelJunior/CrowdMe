import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CrowdMe from './containers/CrowdMe/CrowdMe';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><CrowdMe/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

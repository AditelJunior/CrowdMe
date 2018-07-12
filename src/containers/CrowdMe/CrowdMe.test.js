import React from 'react';
import ReactDOM from 'react-dom';
import CrowdMe from './CrowdMe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CrowdMe />, div);
  ReactDOM.unmountComponentAtNode(div);
});

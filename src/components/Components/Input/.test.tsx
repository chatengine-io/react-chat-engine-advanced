import React from 'react';
import * as ReactDOM from 'react-dom';
import { Input as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing label="primary" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

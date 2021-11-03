import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing } from './Input.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing label="primary" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

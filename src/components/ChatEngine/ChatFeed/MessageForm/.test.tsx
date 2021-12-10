import React from 'react';
import * as ReactDOM from 'react-dom';
import { MessageForm as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing myUsername="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

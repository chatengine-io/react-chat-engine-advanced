import React from 'react';
import * as ReactDOM from 'react-dom';
import { MessageList as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing messages={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

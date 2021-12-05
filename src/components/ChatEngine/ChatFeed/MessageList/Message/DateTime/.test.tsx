import React from 'react';
import * as ReactDOM from 'react-dom';
import { DateTime as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing created="2021-09-29T00:30:47.339408Z" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

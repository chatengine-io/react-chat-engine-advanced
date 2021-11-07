import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing type="primary">Hey</Thing>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

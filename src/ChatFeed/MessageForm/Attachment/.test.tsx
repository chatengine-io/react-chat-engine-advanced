import React from 'react';
import * as ReactDOM from 'react-dom';
import { Attachment as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing file="click.mp3" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

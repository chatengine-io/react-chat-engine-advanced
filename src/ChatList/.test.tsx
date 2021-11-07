import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing } from './stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing chats={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

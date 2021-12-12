import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatList as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing chats={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

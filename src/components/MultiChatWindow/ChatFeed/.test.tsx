import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatFeed as Thing } from '.';
import { chatWithReads } from '../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Thing chat={chatWithReads} messages={[]} username="" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

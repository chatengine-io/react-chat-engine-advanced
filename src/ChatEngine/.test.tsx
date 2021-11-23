import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatEngine as Thing } from '.';

import { chatWithReads, adam } from '../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Thing
        chats={[chatWithReads]}
        chat={chatWithReads}
        myUsername={adam.username}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatEngine as Thing } from '.';

import { chatWithReads, adam, message1001 } from '../util/mocks';

import 'intersection-observer';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Thing
        chats={[chatWithReads]}
        chat={chatWithReads}
        messages={{ '2021-07-14 01:01:00.000000+00:00': message1001 }}
        myUsername={adam.username}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

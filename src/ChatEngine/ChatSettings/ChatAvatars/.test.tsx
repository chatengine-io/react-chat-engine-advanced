import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatAvatars as Thing } from './';
import { threePersonChat, adam as currentUser } from '../../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Thing
        users={threePersonChat.people}
        myUsername={currentUser.username}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

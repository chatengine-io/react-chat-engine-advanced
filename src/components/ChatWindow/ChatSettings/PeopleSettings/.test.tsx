import React from 'react';
import * as ReactDOM from 'react-dom';
import { PeopleSettings as Thing } from '.';

import { threePersonChat } from '../../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing chat={threePersonChat} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

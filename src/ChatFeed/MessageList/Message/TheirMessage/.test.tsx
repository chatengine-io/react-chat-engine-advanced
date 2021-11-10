import React from 'react';
import * as ReactDOM from 'react-dom';

import { TheirMessage as Thing } from '.';

import { message } from '../../../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing message={message} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

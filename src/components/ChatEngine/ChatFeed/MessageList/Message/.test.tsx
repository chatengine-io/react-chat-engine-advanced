import React from 'react';
import * as ReactDOM from 'react-dom';

import { Message as Thing } from '.';

import { message1001 } from '../../../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing message={message1001} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

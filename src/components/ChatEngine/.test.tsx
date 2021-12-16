import React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatEngineWindow as Thing } from '.';

import 'intersection-observer';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing myUsername="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

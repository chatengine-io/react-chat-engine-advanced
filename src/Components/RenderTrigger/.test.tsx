import React from 'react';
import * as ReactDOM from 'react-dom';
import { RenderTrigger as Thing } from '.';

import 'intersection-observer';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

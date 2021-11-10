import React from 'react';
import * as ReactDOM from 'react-dom';

import { Attachment as Thing } from '.';
import { fileAttachment } from '../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing attachment={fileAttachment} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

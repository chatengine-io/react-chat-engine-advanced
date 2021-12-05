import React from 'react';
import * as ReactDOM from 'react-dom';
import { AttachmentInput as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing onSelectFiles={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

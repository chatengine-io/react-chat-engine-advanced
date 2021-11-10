import React from 'react';
import * as ReactDOM from 'react-dom';
import { ImageThumb as Thing } from '.';
import { imageAttachment } from '../../../util/mocks';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing attachment={imageAttachment} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

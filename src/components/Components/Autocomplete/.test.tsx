import React from 'react';
import * as ReactDOM from 'react-dom';
import { Autocomplete as Thing } from '.';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing options={[]} renderOption={() => <></>} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Collapse from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const collapse = (
      <Collapse header="test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem
        ratione voluptatem dolorum itaque eaque voluptates blanditiis
        perspiciatis doloremque, enim aperiam nulla deserunt autem doloribus
        assumenda! Eveniet vel rem porro.
      </Collapse>
    );
    ReactDOM.render(collapse, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

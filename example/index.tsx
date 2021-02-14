import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Collapse from '../.';

const App = () => {
  return (
    <div>
      <Collapse />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

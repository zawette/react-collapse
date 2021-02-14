import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Collapse from '../.';

const App = () => {
  return (
    <div>
      <Collapse header="test" className="myAccordion">
        Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
        incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
        consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
        dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
        officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim
        cillum eiusmod mollit et laboris sint.
        <Collapse header="test" className="myAccordion">
          Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
          incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
          consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
          dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
          officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim
          cillum eiusmod mollit et laboris sint.
          <Collapse header="test" className="myAccordion">
            Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
            incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
            consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
            dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
            officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat
            anim cillum eiusmod mollit et laboris sint.
          </Collapse>
        </Collapse>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

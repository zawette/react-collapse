import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Collapse from '../.';

const App = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <Collapse
        header="nested collapse"
        className="myAccordion"
        // initExpanded
        // disabled
        // isExpanded={isExpanded}
        // onClick={prevState => {
        // setIsExpanded(!isExpanded);
        // }}
      >
        <Collapse header="test" className="myAccordion" duration={400}>
          Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
          incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
          consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
          dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
          officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim
          cillum eiusmod mollit et laboris sint. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Collapse>
        <Collapse header="test" className="myAccordion" duration={200}>
          Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
          incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
          consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
          dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
          officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim
          cillum eiusmod mollit et laboris sint. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Collapse>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

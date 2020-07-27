import React from "react";
import Collapse from "./collapse/Collapse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Collapse header="test" className="myAccordion">
        Proident aute elit eiusmod eu consequat. Nulla mollit fugiat qui
        incididunt aliquip aliqua eu occaecat ea et incididunt. Non ex est
        consequat do aliqua aliqua ipsum aute commodo eu consequat. Commodo
        dolor aliqua nostrud qui aliquip tempor magna nulla non voluptate
        officia eiusmod. Ex Lorem mollit officia labore ut nisi occaecat anim
        cillum eiusmod mollit et laboris sint.
      </Collapse>

      <Collapse header={<span>nested test ❗</span>}>
      <Collapse header={<span>child ❗</span>}>
        Cupidatat mollit elit reprehenderit tempor incididunt in sunt. Labore
        deserunt mollit laboris minim qui est quis aliquip voluptate nulla
        occaecat amet duis. Elit in aliqua exercitation dolore minim ad irure
        excepteur. Esse enim deserunt quis et nostrud pariatur ut fugiat.
        Adipisicing do minim nulla ullamco officia occaecat exercitation cillum
        nostrud eiusmod labore ex do. Culpa quis nisi culpa quis fugiat ut
        excepteur tempor laboris nisi aute excepteur culpa. Pariatur laborum
        ipsum Lorem magna mollit nulla do.
      </Collapse>
      </Collapse>
    </div>
  );
}

export default App;

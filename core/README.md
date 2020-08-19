# react-zaw-collapse
## Install

> npm i react-zaw-collapse
## Example
later
## Usage
``` jsx
    import Collapse  from "react-zaw-collapse";

      <Collapse header="test Header" className="myAccordion" onToggle={(prevState)=>console.log(prevState)}>
        Officia excepteur est velit tempor voluptate laborum excepteur ad enim
        duis velit velit velit exercitation. Sunt mollit nisi minim sint amet
        culpa nisi laborum velit. Ipsum laboris voluptate dolor ex sint nisi
        cillum occaecat deserunt eiusmod labore elit. Excepteur minim fugiat
        officia consectetur laboris commodo. Eiusmod occaecat deserunt ullamco
        ea aute. Cillum deserunt est eiusmod ipsum occaecat occaecat magna
        veniam ad aliqua anim nisi qui.
      </Collapse>
```
## API
| name  |type   |default   |description   |  
|---|---|---|---|
| header  |string   |   | header of accordion   |   
| className | string   |   | custom className  |   
| initExpanded | boolean  | false  | whether the accordion is expanded initially |   
| onToggle |  (prevState: boolean) => any;  |   | called whe the accordion is expanded |   

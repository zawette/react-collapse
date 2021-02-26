# react-zaw-collapse

react accordion/collapse ui component

![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-zaw-collapse)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/zawette/react-collapse/CI)
![version](https://img.shields.io/npm/v/react-zaw-collapse)

- accessible
- supports nested accordions
- responsive

## Install

> npm i react-zaw-collapse

## Demo

https://zawette.github.io/react-collapse/

## Usage

```jsx
import Collapse from 'react-zaw-collapse';

<Collapse
  header="test Header"
  className="myAccordion"
  onClick={prevState => console.log(prevState)}
>
  Officia excepteur est velit tempor voluptate laborum excepteur ad enim duis
  velit velit velit exercitation. Sunt mollit nisi minim sint amet culpa nisi
  laborum velit. Ipsum laboris voluptate dolor ex sint nisi cillum occaecat
  deserunt eiusmod labore elit. Excepteur minim fugiat officia consectetur
  laboris commodo. Eiusmod occaecat deserunt ullamco ea aute. Cillum deserunt
  est eiusmod ipsum occaecat occaecat magna veniam ad aliqua anim nisi qui.
</Collapse>;
```

## API

| name           | type                                                       | default | description                                                    |
| -------------- | ---------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| header         | string or node                                             |         | header of accordion                                            |
| duration       | number                                                     | 700     | transition duration                                            |
| aria-level     | number                                                     | 3       | heading level in the document structure                        |
| className      | string                                                     |         | custom className                                               |
| initExpanded   | boolean                                                    | false   | whether the accordion is expanded initially                    |
| isExpanded     | boolean                                                    |         | controlled accordion                                           |
| disabled       | boolean                                                    |         | disable accordion                                              |
| onClick        | (prevState: boolean) => any;                               |         | called whe the accordion is toggled                            |
| headerTemplate | (headerContent: ReactNode,isExpanded:boolean) => ReactNode |         | custom header template (to change the expand icon for example) |

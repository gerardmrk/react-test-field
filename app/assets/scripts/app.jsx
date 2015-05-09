import React from 'react';
import Main from './NavSimple/main.jsx';


class App extends React.Component {
  render() {
    return <Main/>;
  }
}

React.render(
  <App/>,
  document.getElementById('content')
);
